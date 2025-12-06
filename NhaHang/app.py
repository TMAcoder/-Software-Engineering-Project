from flask import Flask, render_template, request, redirect, url_for, session, flash
import sqlite3
import os

app = Flask(__name__)
app.secret_key = 'chien_restaurant_secret_key'  # Khóa bảo mật cho session

# --- CẤU HÌNH DATABASE ---
def init_db():
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    # Tạo bảng users nếu chưa có
    c.execute('''CREATE TABLE IF NOT EXISTS users 
                 (id INTEGER PRIMARY KEY AUTOINCREMENT, 
                  username TEXT UNIQUE NOT NULL, 
                  password TEXT NOT NULL)''')
    conn.commit()
    conn.close()

# Gọi hàm tạo DB ngay khi chạy
init_db()

# --- ROUTES (ĐƯỜNG DẪN) ---

# 1. Trang gốc: Nếu đã đăng nhập thì vào Dashboard, chưa thì vào Login
@app.route('/')
def index():
    if 'username' in session:
        return redirect(url_for('dashboard'))
    return redirect(url_for('login'))

# 2. Xử lý Đăng nhập & Đăng ký
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        action = request.form.get('action') # Xem người dùng bấm nút nào
        username = request.form['username']
        password = request.form['password']
        
        conn = sqlite3.connect('database.db')
        c = conn.cursor()

        if action == 'register':
            try:
                c.execute("INSERT INTO users (username, password) VALUES (?, ?)", (username, password))
                conn.commit()
                flash('Đăng ký thành công! Hãy đăng nhập.', 'success')
            except sqlite3.IntegrityError:
                flash('Tên tài khoản đã tồn tại!', 'error')
        
        elif action == 'login':
            user = c.execute("SELECT * FROM users WHERE username = ? AND password = ?", (username, password)).fetchone()
            if user:
                session['username'] = username
                conn.close()
                return redirect(url_for('dashboard'))
            else:
                flash('Sai tài khoản hoặc mật khẩu!', 'error')
        
        conn.close()
    
    return render_template('login.html')

# 3. Trang Dashboard (Chính là trang quản lý nhà hàng của bạn)
@app.route('/dashboard')
def dashboard():
    if 'username' not in session:
        return redirect(url_for('login'))
    # Truyền tên người dùng vào giao diện
    return render_template('dashboard.html', username=session['username'])

# 4. Đăng xuất
@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True)
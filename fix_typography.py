import re

with open('src/App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add text-pretty to all paragraph tags
content = content.replace('<p className="', '<p className="text-pretty ')

# We need to change the heading styles to use text-balance instead of whitespace-nowrap and restore scale. 
# 1. Sự Lựa Chọn Của Gia Đình Việt
content = content.replace(
    'text-[1.35rem] min-[375px]:text-2xl sm:text-4xl font-extrabold text-[#182871] uppercase tracking-tighter whitespace-nowrap',
    'text-3xl sm:text-4xl font-extrabold text-[#182871] uppercase tracking-tight text-balance leading-snug'
)

# 2. Sạch Bóng Nhà Bếp
content = content.replace(
    'text-xl min-[375px]:text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4 drop-shadow-lg whitespace-nowrap',
    'text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4 drop-shadow-lg text-balance leading-tight'
)

# 3. Làm Mới Nội Thất
content = content.replace(
    'text-xl min-[375px]:text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4 drop-shadow-lg whitespace-nowrap',
    'text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4 drop-shadow-lg text-balance leading-tight'
)

# 4. Sản phẩm thực tế
content = content.replace(
    'text-[1.5rem] min-[375px]:text-3xl sm:text-4xl font-extrabold text-[#182871] uppercase tracking-tighter whitespace-nowrap',
    'text-3xl sm:text-4xl font-extrabold text-[#182871] uppercase tracking-tight text-balance leading-snug'
)

# 5. Tìm Đối Tác Phân Phối
content = content.replace(
    'text-[1.1rem] min-[400px]:text-[1.3rem] md:text-2xl font-black text-[#182871] uppercase tracking-tighter whitespace-nowrap',
    'text-2xl sm:text-3xl md:text-4xl font-black text-[#182871] uppercase tracking-tight text-balance leading-snug'
)

# 6. Sức Mạnh Từ Công Nghệ 10X
content = content.replace(
    'text-[1.4rem] min-[375px]:text-2xl sm:text-4xl font-extrabold text-[#182871] uppercase tracking-tighter whitespace-nowrap',
    'text-3xl sm:text-4xl font-extrabold text-[#182871] uppercase tracking-tight text-balance leading-snug'
)

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

import re
import os
cwd = r'd:\OFFICE\LIVE\JUNE[16-06-26]\Specialty Tea Blending & Tea Room'
with open(os.path.join(cwd, 'shop.html'), 'r', encoding='utf-8') as f:
    c = f.read()

grid_start = c.find('<div class="shop-grid">')
main_end = c.find('</main>', grid_start)
grid_content = c[grid_start:main_end]
cards = grid_content.split('<div class="card"')
if len(cards) > 7:
    new_grid_content = cards[0]
    for i in range(1, 7):
        new_grid_content += '<div class="card"' + cards[i]
    new_grid_content = new_grid_content.replace('images/tea_ritual.png', 'images/shop_tea_pouch_2.png')
    c = c[:grid_start] + new_grid_content + '        </div>\n    </main>' + c[main_end+7:]
    with open(os.path.join(cwd, 'shop.html'), 'w', encoding='utf-8') as f:
        f.write(c)
    print('Cleaned up shop.html successfully.')
else:
    print('Could not find cards to split.')


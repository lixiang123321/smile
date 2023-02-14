#!/bin/bash
#文件名: rename.sh
#用途: 重命名 .jpg 和 .png 文件
#from: https://geek-docs.com/shell/shell-examples/rename-and-move-multiple-shell-files.html



# 先小写化
# rename *.JPG *.jpg
# rename *.PNG *.png
# rename *.GIF *.gif
# 注释，因为iname忽略大小写。

# find . -iname '*.jpg' -o -iname '*.gif' -type f -maxdepth 1

# count=1;
# for img in `find . -iname '*.jpg' -o -iname '*.gif' -type f -maxdepth 1`
# # for img in `find . -iname '*.png' -o -iname '*.jpg' -o -iname '*.gif' -type f -maxdepth 1`
# do
#   echo "$img"
#   new=image-$count.${img##*.}

#   echo "Renaming $img to $new"
#   mv "$img" "$new"
#   let count++

# done

# mv *.jpeg *.jpg

a=1
for i in *.jpg; do
  new=$(printf "%04d.jpg" "$a") #04 pad to length of 4
  origin=$(printf "%q" $i)
  mv -f -- "$origin" "$new"
  let a=a+1
done

for i in *.jpeg; do
  new=$(printf "%04d.jpg" "$a") #04 pad to length of 4
  origin=$(printf "%q" $i)
  mv -f -- "$origin" "$new"
  let a=a+1
done
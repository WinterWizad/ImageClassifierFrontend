import os
import cv2

path_to_data="./images_list/"
count=0
for entry in os.scandir(path_to_data):
    # print("from"+entry.name)
    img=cv2.imread(entry.path)
    str=f"new_list/random_image{count}.jpg"
    # entry.name=str
    cv2.imwrite(str,img)
    count=count+1
    # print("to"+entry.name)



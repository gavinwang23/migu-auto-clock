//显示控制台
console.show();
log("打开咪咕阅读")
var startUp = app.launch("com.ophone.reader.ui");

//点击书架
sleep(15 * 1000)
log("点击书架")
click(20, device.height - 50)
//id("fixed_bottom_navigation_icon").className("android.widget.ImageView").selected(true).findOne().click()

//把书名换成你书架某本书的名称，或者书架内添加一本《全球通史》！！！！！
var book = textContains("全球通史").findOne(10 * 1000);

log("打开全球通史")
book.parent().parent().click();


//翻页17分钟，每分钟四次
var min = 17

for(var i = 0; i < min; i++){
    var y1 = random(device.height/2 - 200,device.height/2 + 200);
    var x1 = random(device.width - 30,device.width - 20);
    var t1 = random(13,17)
    var y2 = random(device.height/2 - 200,device.height/2 + 200);
    var x2 = random(device.width - 30,device.width - 20);
    var t2 = random(13,17)
    var y3 = random(device.height/2 - 200,device.height/2 + 200);
    var x3 = random(device.width - 30,device.width - 20);
    var t3 = random(13,17)
    var y4 = random(device.height/2 - 200,device.height/2 + 200);
    var x4 = random(device.width - 30,device.width - 20);

    sleep(t1 * 1000)
    click(x1, y1);
	log("翻页" + (i*4+1) + "次")
	
    sleep(t2* 1000)
    click(x2, y2);
	log("翻页" + (i*4+2) + "次")

    sleep(t3* 1000)
    click(x3, y3);
	log("翻页" + (i*4+3) + "次")

    sleep((60-t1-t2-t3)* 1000)
    click(x4, y4);
	
	log("翻页" + (i*4+4) + "次，第" + (i+1) + "分钟")
}
log("完成阅读")
sleep(2 * 1000)
back()

sleep(3 * 1000)
//确保搜索历史有 天天爱阅读！！！
id("btn_bookshelf_search").findOne().click()
log("搜索天天爱阅读")
text("天天爱阅读").findOne(5000).parent().parent().click()
//点击天天爱阅读横幅
sleep(3 * 1000)
click(700,300)
log("进入打卡页面")
//text("咪咕Kindle").findOne(5000).parent().parent().click()
//className("android.view.View").text("%E6%90%9C%E7%B4%A2%E5%8F%A3%E4%BB%A4%E5%9B%BE").findOne().parent().waitFor()

log("开始签到")
sleep(3 * 1000)
var checkouBtn = text("签到").find()
for(var it of checkouBtn){
    it.click()
}
sleep(3 * 1000)
var rst1 = textContains("已完成").findOne(5 * 1000)
back()
var rst2 = textContains("已完成").findOne(5 * 1000)

//判断是否成功
if(rst1 || rst2){
    log("签到成功！！！！！")
}
else{
    log("签到失败！！！！！")
}

sleep(10 * 1000)
back()
sleep(1000)
back()
sleep(1000)
back()
sleep(3000)
home()
sleep(1000)
log("Finish")

//是否重新打开autojs，如果要打开把注释去掉
//var startUp = app.launch("org.autojs.autojs")

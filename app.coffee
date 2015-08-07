# Remove framer cursor
document.body.style.cursor = "pointer"
yo5=true
# mp1 = Framer.Importer.load "imported/mp1"
# for layerGroupName of mp1
#   window[layerGroupName] = mp1[layerGroupName]

minwidth = 980
p=9
ph=[0,600,400,350,550,670,850,530,350,370]

app = w: Framer.Device.screen.width, h: Framer.Device.screen.height
scroll = new ScrollComponent width: app.w, height:app.h, backgroundColor: "white"
scroll.content.width = Math.max(app.w,minwidth)
scroll.speedX = 0
scroll.mouseWheelEnabled = true
mp = new Layer superLayer:scroll.content, width: Math.max(app.w,minwidth), height: 8000, backgroundColor: "transparent"
# mainpage = new Layer superLayer:mp, width: 1250, height: 4000, image: "images/mp1.png"
# mainpage.centerX()
posts = new Layer width: scroll.content.width, height: 8000, y: 100, superLayer: scroll.content, backgroundColor: "transparent"
header = new Layer width: scroll.content.width, height: 130, y: 100, superLayer: scroll.content, backgroundColor: "transparent"

logo = new Layer superLayer: header, width: 300, height: 66, image: "images/logo.png"
logo.center()
logo.y += 10

sandwich = new Layer superLayer: header, width: 238, height: 27, image: "images/sand.png"

sandwich.minX = header.minX+40
sandwich.centerY()
	
search = new Layer superLayer: header, width: 166, height: 24, image: "images/se.png"
search.maxX = header.maxX-40
search.centerY()

#top-banner
adstop = new Layer width: scroll.content.width, height: 104, superLayer: scroll.content, backgroundColor: "transparent"
adswhite = new Layer width: scroll.content.width, height: 100, superLayer: adstop, backgroundColor: "white"
ads = new Layer width: scroll.content.width, height: 90, width:970, superLayer: adswhite, backgroundColor: "#ededed"
ads.center()
adsshadow1 = new Layer width: scroll.content.width, height: .5, y:100, superLayer: adstop, backgroundColor: "black", opacity: .15
adsshadow2 = new Layer width: scroll.content.width, height: 2, y:100, superLayer: adstop, backgroundColor: "black", opacity: .1
#top-banner

index = 5

post = []
post[1] = new Layer width: scroll.content.width, height: ph[1], y:0, superLayer: posts, backgroundColor: "black"
post1image = new Layer width: scroll.content.width, height: 600, y:0, superLayer: post[1], image: "images/toppost-image.png", opacity: .6
postheader = new Layer
	width: 952
	height: 203
	image: "images/toppostheader.png"
	superLayer: post[1]
	maxY: post[1].maxY-100
	midX: post[1].midX

date = new Layer width: 339/2+10, height: 27/2, image: "images/date.png", superLayer: post[1], minX: 40, maxY: post[1].maxY-40

topic = new Layer width: 380/2, height: 54/2, image: "images/topic.png", superLayer: post[1], maxX: post[1].maxX-40, maxY: post[1].maxY-40


# scroll.on Events.Scroll, ->
# 	if post[1].screenFrame.y < 100
# 			post1image.opacity = 0.4-scroll.scrollY/2000
# 			post1image.y = scroll.scrollY/8
# 			post1image.scale = scroll.scrollY/3000+1
# 		else
# 			post1image.opacity = 0.4
# 			post1image.y = 0
# 			post1image.scale = 1
	
scroll.on Events.Scroll, ->
	if post[1].screenFrame.y < 100
			post1image.opacity = 0.6+(post[1].screenFrame.y-100)/1500
			post1image.y = -(post[1].screenFrame.y-100)/8
			post1image.scale = -(post[1].screenFrame.y-100)/2000+1
		else
			post1image.opacity = 0.6
			post1image.y = 0
			post1image.scale = 1
# 	if post[5].screenFrame.y < 0
# 			print ""
# # 			post4image.opacity = 0.6+(post[5].screenFrame.y)/1500
# # 			post4image.y = -(post[5].screenFrame.y)/8
# # 			post4image.scale = -(post[5].screenFrame.y)/2000+1
# 		else
	if post[5].screenFrame.y < app.h and yo5
				yo=false
				post4image.animate
					properties:
						scale: 1
# 					time: .3
					curve: "ease-out"
# 				post4image.opacity = 0.6
# 				post4image.y = 0
# 				post4image.scale = 1

Events.wrap(window).addEventListener "resize", (event) ->
	window.location.reload(false)


for index in [2..p]
	post[index] = new Layer width: scroll.content.width, height: ph[index], y:post[index-1].maxY, superLayer: posts, backgroundColor: "white", opacity: 1
	divider = new Layer width: scroll.content.width, height: .5, superLayer: post[index], y: post[index].height-1, backgroundColor: "black", opacity: .2
	if index != 5 and index != 3
		post[index].on Events.MouseOver, ->
			@.backgroundColor = "#FAFAFA"
		post[index].on Events.MouseOut, ->
			@.backgroundColor = "white"
	
post[5].backgroundColor = "black"
post4image = new Layer width: scroll.content.width, height: ph[5], y:0, superLayer: post[5], image: "images/toppost-image.png", opacity: .6, scale: 1.3
post4image.center()



p5 = new Layer width: 962, height: 744, image: "images/P-5.png", superLayer: post[6]
p5.center()
p3 = new Layer width: 963, height: 373, image: "images/P-3.png", superLayer: post[4]
p3.center()
p4 = new Layer width: 1032, height: 546, image: "images/P-4.png", superLayer: post[5]
p4.center()
p6 = new Layer width: 627, height: 463, image: "images/P-6.png", superLayer: post[7]
p6.center()
p7 = new Layer width: 624, height: 286, image: "images/P-7.png", superLayer: post[8]
p7.center()
p8 = new Layer width: 962, height: 268, image: "images/P-8.png", superLayer: post[9]
p8.center()
p2 = new Layer width: 962, height: 268, image: "images/P-2.png", superLayer: post[2]
p2.center()
socialmedia = new Layer width: 805, height: 247, image: "images/P-Social.png", superLayer: post[3]
socialmedia.center()
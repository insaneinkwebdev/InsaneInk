# InsaneInk Website REVAMPED

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

TLDR to all of this (ngl this will probably be a good 30 minute read): To the incoming/current VPs of Web Dev... good luck lmao

## What is this?

To put it bluntly, this is either going to be the easiest thing you will ever see or the hardest challenge you will ever face when it comes to coding (unless you are familiar with ReactJS or like an absolute god at learning things).

The website was originally PHP (you can use PHP is if you are more comfortable with it but it lowkey look kind of wack), but THIS site is in ReactJS.

This means that instead of having a single file for a single page (if you have/had Web Tech you will know how HTML files are written), you have to create components.
You use these components to form pages.

For example with the landing page, it is comprised of a lot of different sections. Instead of using the <section> tag you normally would, you write them each in seperate files. 

In App.js there are two components that should NEVER be removed: nav and footer. This is because whenever you go to a different page, what it actually does is it just changes the path and switches out the content. 

Now why is this better than HTML?

Well it's just much easier to add new/edit things and save code space (also a whole lot of other technical jargle regarding libraries and all that).

Let's get started. There is A LOT to cover.

-----------------------------------------------------------------------------------------------------------------------------

## Some Things to Install

Before we get into any of the actual coding and the whole "duties" thing you'll have, you gotta install some things to actually start yknow... coding. 

If you already have an IDE that you like to use AND you also are familiar with Github Desktop then you can skip this section :)

## IDE

So if you took Web Tech you should be somewhat familiar with IDEs, and if you didn't then it is basically a place where you can write your code and test it out. 
There's a whole lot more to it like formatting, auto-correcting syntax, extensions, and etc. but you pretty much just need to know the very basics of it. 

I recommend you use VS Code (Visual Studio) which you can download here: https://code.visualstudio.com/download , but again pick what you think works best for you.

Github Desktop however, is an absolute MUST. 

## Github Desktop

Not to throw any shade to anyone, but when I first took this role I found out that all of the backup files were saved IN THE SAME FOLDER AS THE REGULAR FILES. That is a big no no just because if you lose that entire folder, its gone. 

So that's why you use Github, and by the time you're reading this I've probably forced you to create (or log into) a github account. Github in general is just something you should try to get familiar with early if you want to pursue a career that has to deal with coding. 

Github Desktop is a program that basically helps you update your Github projects much easier (unless you are a god and know how to do it via CLI) and its needed for Insane Ink since everything is saved here.

Installation: https://desktop.github.com/

Here's a quick guide on everything that you need to know for Insane Ink purposes. 

So when you first go into the app after you've finished logging into Github and all that, there should be some options to choose from, and what you should choose is something along the lines of "Clone Repository" which SHOULD lead you to selecting one of your projects, and you should choose this one.

![image](https://user-images.githubusercontent.com/90130887/203904181-f342cf55-3168-44a9-bab0-a119e75bfc40.png)

If you see this, then cool. 

So all you need to know for this is that whenever you change something in the IDE, something will pop up there that shows all the files you've worked on

![image](https://user-images.githubusercontent.com/90130887/203904339-4c9a8332-3d2b-4294-b205-cca01731ca8d.png)

Once everything is good to go and you are ready to save it, then go ahead and give it a title and click "commit to master"  

![image](https://user-images.githubusercontent.com/90130887/203904454-e1630ae5-49b3-4f98-8b91-cfd1a3607185.png)

Once you do that, you are almost done. Now something in the top bar will change from "Fetch Origin" to "Push Origin". All you need to do is make that last confirm and click it. 

![image](https://user-images.githubusercontent.com/90130887/203904594-cd75bbba-98ce-49d4-ada1-b86a4bce2267.png)

Depending on how big the change is it should take around 10-20 seconds (or 2-3 minutes if its kinda big), but after that you are done!
Keep in mind that "fetch origin" just makes sure that everything is up to date, so it really shouldn't be something that matters too much.

-----------------------------------------------------------------------------------------------------------------------------

## Laying Our Foundation
  
After everything finally, we can start talking about the structure of the website and some general stuff about foundation (sort of code but not really).

When it comes to ReactJS, either you know it or you don't.

But that's alright, here's a general overview of what you need to know with the current site.

So the very first thing you will see are three main folders:
- public
- src
- node_modules

Now #1 thing, NEVER edit, add, or remove the node_modules and anything else outside of public and src (unless you know what it is of course).
node_modules is basically the skeleton of the website, it is what the site uses to exist.

The two things you should look into though are src and public

src is where your source code is, it is where you should be doing the most of your work. Inside will be images, css, js, and essentially everything you need to do.

public is the "display" of the site, it's what React uses to host what you've coded. The only thing that should maybe be changed in that file is the title of the site or the icon.
- Due to my lack of skill in coding, all slideshow images or content that is dynamically loaded (not hard-coded in) will be located here, so just keep this in mind as for your duties to come!

I suggest taking some time just getting familiar especially with src since it can be difficult to manage. But that's okay :tada:

## Log
- 10/13/2022 Created foundation/file structure + image slider logic
- 10/14/2022 Added navbar + slider debugging
- 10/15/2022 Section setup for home page + mobile nav display fix + skeleton for portfolio section :sob: :skull:
- 10/16/2022 Break day :bust_in_silhouette:
- 10/17/2022 Break day :bust_in_silhouette:
- 10/18/2022 Whole lotta break days :bust_in_silhouette:
- 10/19/2022 Renamed directories/files + created "About Us" section + backed up OG Insane Ink site to github.
- 10/20/2022 Created + completed footer, added official content to landing page. Almost done :tada: :tada: :tada:
- 10/21/2022 Some image reformatting on landing page + added dropdowns to navbar
- 10/22/2022 Break day :bust_in_silhouette:
- 10/23/2022 Break day :bust_in_silhouette:
- 10/24/2022 Removed Options Section (this made me want to die for like 3 days, GOODBYE) + Finished Landing Page + Added get started button w/ functionality + basic link hrefs
- 10/25/2022 Break day :bust_in_silhouette:
- 10/26/2022 Start React-Router implementation into App.js
- 10/27/2022 Break day :bust_in_silhouette:
- 10/28/2022 Create about page
- 10/29/2022 Fixed mobile display for 'get started' button + finalized board presentation slides
- 10/30/2022 Break day :bust_in_silhouette:
- 10/31/2022 Break day :bust_in_silhouette:
- 11/01/2022 Break day :bust_in_silhouette:
- 11/02/2022 Work on About Page Skeleton + add extra footer contact (email)
- 11/03/2022 Mentally prepare for board presentation (even though its 2 slides)
- 11/04/2022 Video added to About Page (probably finished??) + styling tests + rerouting + added tap icon to mobile display
- 11/04/2022 Style changes on Insane Ink OG Site
- 11/05/2022 Style changes on Insane Ink OG Site
- 11/06/2022 Style changes on Insane Ink OG Site
- 11/07/2022 Style changes on Insane Ink OG Site
- 11/08/2022 Style changes on Insane Ink OG Site
- 11/09/2022 Break day :bust_in_silhouette:
- 11/10/2022 Break day :bust_in_silhouette:
- 11/11/2022 Break day :bust_in_silhouette:
- 11/12/2022 Break day :bust_in_silhouette:
- 11/13/2022 Designing skeleton for TT page (Figma)
- 11/14/2022 Designing skeleton for TT page (Figma)
- 11/15/2022 More designing + implement page animations using Animate.css
- 11/16/2022 Adding skeletons to pages
- 11/17/2022 File management + concept for rabbit overlays on contact page
- 11/18/2022 Design for rabbit overlays
- 11/19/2022 File management + editing skeletons + add 404 default + graphic for 404
- 11/20/2022 Add content to TT page + style + mobile support (hopefully) + modal product closeup (TT) + nav fixes
- 11/21/2022 (plan to) Fix nav styling for mobile (Order Now! + more...)
- 11/22/2022 Completed TT page :tada:

import { v4 as uuidv4 } from "uuid";

const dataSlider = [
  {//UPLOADING 6 AT A TIME
    //u can compress images by downloading ImageMagick and running this command 
    //magick 49ers.jpg -strip -resize 500x771 ultraSmall/49ers.jpg
    //ultraSmall was just the name of the new folder i was gonna save the compressed images in
    id: uuidv4(),
    year: "2024-2025",
    images: [
      {
        name: "Lujan Stickers",
        src: `${process.env.PUBLIC_URL}/portfolio/2025/Lujan.jpg`,
        isWhite: true,
        
      },
      {
        name: "Magkaisa",
        src: `${process.env.PUBLIC_URL}/portfolio/2025/Magkaisa.jpg`,
        isWhite: true,
        
      },
      {
        name: "MLK Graphic",
        src: `${process.env.PUBLIC_URL}/portfolio/2025/MLK.jpg`,
        isWhite: true,
        
      },
      {
        name: "Morrill Graphic",
        src: `${process.env.PUBLIC_URL}/portfolio/2025/Morrill.jpg`,
        isWhite: true,
        
      },
      {
        name: "Overfelt",
        src: `${process.env.PUBLIC_URL}/portfolio/2025/Overfelt.jpg`,
        isWhite: true,
        
      },
      {
        name: "Basketball Backpack 2",
        src: `${process.env.PUBLIC_URL}/portfolio/2025/Backpack.jpg`,
        isWhite: true,
        
      },
      {
        name: "Parent Booster",
        src: `${process.env.PUBLIC_URL}/portfolio/2025/Booster.jpg`,
        isWhite: true,
        
      },
      {
        name: "Pirate Crewback",
        src: `${process.env.PUBLIC_URL}/portfolio/2025/crewback.jpg`,
        isWhite: true,
        
      },
      {
        name: "CTA Shirts",
        src: `${process.env.PUBLIC_URL}/portfolio/2025/CTA.jpg`,
        isWhite: true,
        
      },
      {
        name: "Sierramont Music",
        src: `${process.env.PUBLIC_URL}/portfolio/2025/Music.jpg`,
        isWhite: true,
        
      },
      {
        name: "Ruskin Shirts",
        src: `${process.env.PUBLIC_URL}/portfolio/2025/Ruskin.jpg`,
        isWhite: false,
        
      },
      {
        name: "Valentines Day Shirt",
        src: `${process.env.PUBLIC_URL}/portfolio/2025/Vday.jpg`,
        isWhite: true,
        
      },
      {
        name: "St. Victors Shirt",
        src: `${process.env.PUBLIC_URL}/portfolio/2025/Victors.jpg`,
        isWhite: true,
        
      },
      {
        name: "Annual Special Olympics",
        src: `${process.env.PUBLIC_URL}/portfolio/2025/Annual.jpg`,
        isWhite: true,
        
      },
      {
        name: "Winter Promo Mofusand",
        src: `${process.env.PUBLIC_URL}/portfolio/2025/catthing.jpg`,
        isWhite: true,
        type: "class"
      },
      {
        name: "PowderPuff",
        src: `${process.env.PUBLIC_URL}/portfolio/2025/powderpuff.jpg`,
        isWhite: true,
        
      },
      {
        name: "Adele",
        src: `${process.env.PUBLIC_URL}/portfolio/2025/AdeleResize.jpg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "Basketball Backpack",
        src: `${process.env.PUBLIC_URL}/portfolio/2025/BackpackResize.png`,
        isWhite: false,
        
      },
      {
        name: "Wrestling Poster",
        src: `${process.env.PUBLIC_URL}/portfolio/2025/buffResize.png`,
        isWhite: false,
        
      },
      {
        name: "Cherrywood",
        src: `${process.env.PUBLIC_URL}/portfolio/2025/CherrywoodResize.jpg`,
        isWhite: false,
        
      },
      {
        name: "Winter Promo Christmas",
        src: `${process.env.PUBLIC_URL}/portfolio/2025/ChristmasResize.jpeg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "Girls Tennis",
        src: `${process.env.PUBLIC_URL}/portfolio/2025/GirlResize.jpg`,
        isWhite: false,
        
      },
      {
        name: "Mother Appreciation",
        src: `${process.env.PUBLIC_URL}/portfolio/2025/momResize.jpg`,
        isWhite: true,
        
      },
      {
        name: "Winter Promo Santa",
        src: `${process.env.PUBLIC_URL}/portfolio/2025/SantaResize.jpg`,
        isWhite: true,
        
      },
      {
        name: "Music",
        src: `${process.env.PUBLIC_URL}/portfolio/2025/TrebleResize.jpg`,
        isWhite: false,
        
      },
    ]
  },
  {
    id: uuidv4(),
    year: "2023-2024",
    images: [
      {
        name: "Insane Ink",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/InsaneInkN23.jpg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "Noble Elementary",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/noble.jpg`,
        isWhite: false,
      },
      {
        name: "Treasure Trove Quarter Zips",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/TT.jpg`,
        isWhite: false,
      },
      {
        name: "Careless Whisper",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/CarelessWhisper.jpg`,
        isWhite: false,
      },
      {
        name: "Piedmont Hills Staff",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/phhsStaff.jpg`,
        isWhite: false,
      },
      {
        name: "Piedmont Hills Staff Nametags",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/phhsNameTag.jpg`,
        isWhite: false,
      },
      {
        name: "Sierramont Music Dept.",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/Sierramont.jpg`,
        isWhite: false,
      },
      {
        name: "Sierramont Music Dept.",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/Sierramont1.jpg`,
        isWhite: false,
      },
      {
        name: "ESUHSD Special Olympics",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/SpecialOlympics.jpg`,
        isWhite: false,
      },
      {
        name: "Santa Paws",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/SantaPaws.jpg`,
        isWhite: false,
      },
      {
        name: "St. Victor Parish",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/Victors.jpg`,
        isWhite: false,
      },
      {
        name: "Car Culture",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/CarCulture.jpg`,
        isWhite: false,
      },
      {
        name: "I <3 Taiwan",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/Taiwan.jpg`,
        isWhite: false,
      },
      {
        name: "Banh Mi & Bowl",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/BanhMiBowl.jpg`,
        isWhite: false,
      },
      {
        name: "PHHS Tennis",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/Tennis.jpg`,
        isWhite: false,
      },
      {
        name: "Boys Tennis",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/boystennis.jpg`,
        isWhite: false,
      },
      {
        name: "Laneview Elementary",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/tran.jpg`,
        isWhite: false,
      },
      {
        name: "Silicon Valley Young Democrats",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/svyd.jpg`,
        isWhite: false,
      },
      {
        name: "Needle to the Groove",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/needle.jpg`,
        isWhite: false,
      },
      {
        name: "Spartan Middle School",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/sms.jpg`,
        isWhite: false,
      },
      {
        name: "Backyard Beez",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/beez2.jpg`,
        isWhite: false,
      },
      {
        name: "Lake Tulloch",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/tulloch.jpg`,
        isWhite: false,
      },
      {
        name: "Cherrywood Education",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/cherrywoodEdu1.jpg`,
        isWhite: false,
      },
      {
        name: "PHHS Mariposas",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/mariposas1.jpg`,
        isWhite: false,
      },
      {
        name: "PHHS Black Student Union",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/bsu.jpg`,
        isWhite: false,
      },
      {
        name: "PHHS Black Student Union",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/bsu1.jpg`,
        isWhite: false,
      },
      {
        name: "PHHS Black Student Union",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/bsu2.jpg`,
        isWhite: false,
      },
      {
        name: "PHHS Journalism",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/journalism1.jpg`,
        isWhite: false,
      },
      {
        name: "Morling Financial Advisors",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/mfa.jpg`,
        isWhite: false,
      },
      {
        name: "PHHS Cheer",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/cheerbye.jpg`,
        isWhite: false,
      },
      {
        name: "PHHS Cheer",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/eatsleep.jpg`,
        isWhite: false,
      },
      {
        name: "PHHS Cheer",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/cheersport.jpg`,
        isWhite: false,
      },
      {
        name: "PHHS Cheer",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/cheerheart.jpg`,
        isWhite: false,
      },
      {
        name: "PHHS Cheer",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/cheerdeclassified.jpg`,
        isWhite: false,
      },
      {
        name: "PHHS Cheer",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/phhscheer.jpg`,
        isWhite: false,
      },
      {
        name: "ASHRAE Bocce Ball",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/bocce.jpg`,
        isWhite: false,
      },
      {
        name: "Ms. Murray's Class",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/murray1.jpg`,
        isWhite: false,
      },
      {
        name: "Ms. Murray's Class",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/murray2.jpg`,
        isWhite: false,
      },
      {
        name: "PHHS Med101",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/med101.jpg`,
        isWhite: false,
      },
      {
        name: "PHHS Orchestra",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/orch.jpg`,
        isWhite: false,
      },
      {
        name: "PHHS Orchestra",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/orch2.jpg`,
        isWhite: false,
      },
      {
        name: "PHHS Anime Club",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/anime1.jpg`,
        isWhite: false,
      },
      {
        name: "PHHS Anime Club",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/anime2.jpg`,
        isWhite: false,
      },
      {
        name: "The Pitch",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/pitch.jpg`,
        isWhite: false,
      },
      {
        name: "The Pitch",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/pitch2.jpg`,
        isWhite: false,
      },
      {
        name: "East Side Adult Education",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/esaec.jpg`,
        isWhite: false,
      },
      {
        name: "East Side Adult Education",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/esaed.jpg`,
        isWhite: false,
      },
      {
        name: "PHHS Mock Trial",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/mocktrial.jpg`,
        isWhite: false,
      },
      {
        name: "PHHS Music Honor Society",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/mhs.jpg`,
        isWhite: false,
      },
      {
        name: "PHHS Choir Council",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/musicdept.jpg`,
        isWhite: false,
      },
      {
        name: "PHHS Choir Council",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/musicdept2.jpg`,
        isWhite: false,
      },
      {
        name: "PHHS Wrestling",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/wrestling.jpg`,
        isWhite: false,
      },
      {
        name: "Cherrywood",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/cherrywood.jpg`,
        isWhite: false,
      },
      {
        name: "PHHS Golf",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/golf.jpg`,
        isWhite: false,
      },
      {
        name: "PHHS Science Olympiad",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/sciolympiad.jpg`,
        isWhite: false,
      },
      {
        name: "PHHS Fantastics",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/fantastics.jpg`,
        isWhite: false,
      },
      {
        name: "Mrs. Hoffman's Class",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/hoffman.jpg`,
        isWhite: false,
      },
      {
        name: "Ruskin Elementary",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/ruskin.jpg`,
        isWhite: false,
      },
      {
        name: "Ruskin Elementary",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/gecko.jpg`,
        isWhite: false,
      },
      {
        name: "Joven Noble",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/joven1.jpg`,
        isWhite: false,
      },
      {
        name: "SJSU Mariachi",
        src: `${process.env.PUBLIC_URL}/portfolio/2024/sjsu.jpg`,
        isWhite: false,
      }
    ]
  },
  {
    id: uuidv4(),
    year: "2022-2023",
    images: [
      {
        name: "Insane Ink",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/class/IIZ008IICLASS.jpg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "Building Information Modeling",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/class/4 1.jpg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "AVID",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/class/IIE005AVID25FG 1.jpg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "PHHS Choir Council",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/club/IIE004 CCBack 1.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "PHHS Boys Golf",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/club/IIE008BoysGolfHatGraphic 1.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "PHHS Treblemakers",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/club/tm1 1.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "PHHS Red Cross",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/club/IIA004 PHHS RedCross.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "PHHS Music Dept. Officers",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/club/IIE003 Back Graphic 1.jpg`,
        isWhite: true,
        type: "club"
      },
      {
        name: "Symphony Orchestra",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/club/IIE002symphonyfrontgraphic 1.jpg`,
        isWhite: true,
        type: "club"
      },
      {
        name: "String Orchestra",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/club/IIE001-StringOrchfrontgraphic 1.jpg`,
        isWhite: true,
        type: "club"
      },
      {
        name: "Biking Club",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/club/IIJJ002 Biking Club 1.jpg`,
        isWhite: true,
        type: "club"
      },
      {
        name: "Male Cheer",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/club/IIZ003MaleCheer front (1) 1.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "Powder Puff",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/club/IIZ004PowderPuff23 front (1) 1.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "PHHS Soccer",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/club/III001front.jpg`,
        isWhite: true,
        type: "club"
      },
      {
        name: "Science Olympiad",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/club/IIF001-SCIOLY Graphic.jpg`,
        isWhite: true,
        type: "club"
      },
      {
        name: "I'm Sorry For Being Filipino",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other/filipinoMeme 1.jpg`,
        isWhite: true,
        type: "other"
      },
      {
        name: "Chess Teachers",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other/Do you Enjoy working with children 1.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Ironboy Project",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other/ironboy.jpg`,
        isWhite: true,
        type: "other"
      },
      {
        name: "Infinitesimal",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other/KK-DTG01 1.jpg`,
        isWhite: true,
        type: "other"
      },
      {
        name: "Milpitas Misfits",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other/IID002MisfitsBack 1.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Breezy",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other/IIJJ001 Jeff 1.jpg`,
        isWhite: true,
        type: "other"
      },
      {
        name: "Jollibae",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other/Jollibae 1.jpg`,
        isWhite: true,
        type: "other"
      },
      {
        name: "Potato Corner",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other/Potato Corner 1.jpg`,
        isWhite: true,
        type: "other"
      },
      {
        name: "Drama: The Single Man",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other/The Single Man image 1.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Treasure Trove",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other/IITT001FRONTDESIGN.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Treasure Trove",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other/IITT002 front graphic.jpg`,
        isWhite: true,
        type: "other"
      },
      {
        name: "Family Christmas",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other/IIC001 Lagunilla Family Graphic.jpg`,
        isWhite: true,
        type: "other"
      },
      {
        name: "Parent Boosters",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other/IIZ002PBOOST graphic.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "ESUHSD Special Olympics",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other/IIA001 ESUHSDSpecialOlympicsgraphic1.jpg`,
        isWhite: true,
        type: "other"
      },
      {
        name: "Egypt Vacation",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other/IT-DTG01.jpg`,
        isWhite: true,
        type: "other"
      },
      {
        name: "Summerdale 4th Graders",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other_school/IIE009 Graphic Front 1.jpg`,
        isWhite: true,
        type: "other school"
      },
      {
        name: "EVHS VSU",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other_school/IIA003 EVHS VSU.jpg`,
        isWhite: true,
        type: "other school"
      },
      {
        name: "SMS Semper Fi",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other_school/IID001 SierramontVuFront.jpg`,
        isWhite: false,
        type: "other school"
      },
      {
        name: "IHS C.L.U.B",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other_school/III006 IHS Club hoodies - front 1.jpg`,
        isWhite: true,
        type: "other school"
      },
      {
        name: "IHS VSA",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other_school/IIK001FrontGraphic 1.jpg`,
        isWhite: true,
        type: "other school"
      },
      {
        name: "Ruskin PTA",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other_school/IIZ009RuskinPTA front (2) 1.jpg`,
        isWhite: false,
        type: "other school"
      },
      {
        name: "Silver Creek HS",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other_school/IIZ013SCHSNewWhite Front (2) 1.jpg`,
        isWhite: true,
        type: "other school"
      },
      {
        name: "Silver Creek HS",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other_school/IIZ010SCHSReorderWhite Front (1) 1.jpg`,
        isWhite: true,
        type: "other school"
      },
      {
        name: "Silver Creek HS",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other_school/IIZ012SCHSNewBlack Front (2) 1.jpg`,
        isWhite: false,
        type: "other school"
      },
      {
        name: "Silver Creek HS",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other_school/IIZ014SCHSQuarterZip Front (2) 1.jpg`,
        isWhite: false,
        type: "other school"
      },
      {
        name: "Silver Creek HS",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other_school/IIZ015SCHSJersey Front (2) 1.jpg`,
        isWhite: false,
        type: "other school"
      },
      {
        name: "SJVS",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other_school/IIA002 SJVS.jpg`,
        isWhite: true,
        type: "other school"
      },
      {
        name: "Ruskin Mr. Amutan",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other_school/III002FD.jpg`,
        isWhite: true,
        type: "other school"
      },
      {
        name: "Noble Staff",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other_school/III003.jpg`,
        isWhite: false,
        type: "other school"
      },
      {
        name: "IHS C.L.U.B.",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other_school/IIZ002CLUB - LEFT leg graphic (3).jpg`,
        isWhite: true,
        type: "other school"
      },
      {
        name: "IHS Teaching Academy",
        src: `${process.env.PUBLIC_URL}/portfolio/2023/other_school/IIZ007IHSTA - graphic.jpg`,
        isWhite: false,
        type: "other school"
      }
    ]
  },
  {
    id: uuidv4(),
    year: "2021-2022",
    images: [
      {
        name: "AP Calculus BC",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/class/1Calculus0301Graphic.jpg`,
        isWhite: true,
        type: "class"
      },
      {
        name: "Music Council",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/class/3MusicCouncil1103_FrontGraphic.jpg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "Ms. Pereira",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/class/4pereiradoordecor0119.jpg`,
        isWhite: true,
        type: "class"
      },
      {
        name: "Mr. Smith",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/class/4smithdoordecor.jpg`,
        isWhite: true,
        type: "class"
      },
      {
        name: "Music",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/class/5musicdept0413 (1).jpg`,
        isWhite: true,
        type: "class"
      },
      {
        name: "AP Lang",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/class/8liuaplang0215 front.jpg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "Mr. Loggins",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/class/8LogginsDTG.jpg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "ASB",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/class/8phhsasb1110 design.jpg`,
        isWhite: true,
        type: "class"
      },
      {
        name: "AVID",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/class/9Avid1108-FrontGraphicExample-BBG.jpg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "Interact",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/club/2phhsinteract1011.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "Art Scene",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/club/4artscene1206.jpg`,
        isWhite: true,
        type: "club"
      },
      {
        name: "Badminton",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/club/5badminton0118.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "Boys Tennis",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/club/8boystennis0304 picked.jpg`,
        isWhite: true,
        type: "club"
      },
      {
        name: "CSF",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/club/5phhscsf0110 - Graphic Design.jpg`,
        isWhite: true,
        type: "club"
      },
      {
        name: "PHHS Softball",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/club/5softball0118 - Graphic On Hot Pink.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "PHHS Basketball",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/club/8PHHSWomenBasketballDTG.jpg`,
        isWhite: true,
        type: "club"
      },
      {
        name: "PHHS Golf",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/club/9GirlsGolf106 Hoodie Graphic.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "VSA",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/club/9VSA1210.jpg`,
        isWhite: true,
        type: "club"
      },
      {
        name: "Seminar",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/club/12seminarclub1112 - Front Design.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "KEY",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/club/13keyclub0121-01.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "Mod to Severe",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/club/13modtosevere0201 - graphic-01.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "PHHS Junior Cheer",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/club/PHHS Junior Cheer 2021.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "PHHS Track",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/club/1Track0412Graphic.jpg`,
        isWhite: true,
        type: "club"
      },
      {
        name: "Fantastics",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/3Fantastics0128_Front(whiteversion).jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "F.R.I.E.N.D.S",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/3RachelLiDTGGraphic1031.jpg`,
        isWhite: true,
        type: "other"
      },
      {
        name: "Alice's Birthday",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/4alicebirthday0114.jpg`,
        isWhite: true,
        type: "other"
      },
      {
        name: "Stacked Pandas",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/4daniel0111.jpg`,
        isWhite: true,
        type: "other"
      },
      {
        name: "Emixmas",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/4emixmas1122.jpg`,
        isWhite: true,
        type: "other"
      },
      {
        name: "ESUHSD Jog-A-Thon",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/4jogathon0121.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Parent Boosters",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/4parentboosters0309.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Steps for Super Stars ",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/4sartorette0922.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Team Edward",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/4trudytwilight1122.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Autism Awareness ",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/5etreeaunt1122 - Front Design.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Ocean Supermarket ",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/5oceansupermarket1122 - Front Design.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Cepheid ",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/8cephied0924 front.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Discipline ",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/8disciplineDTG.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "PHHS Seniors ",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/8SeniorMerch0103Back.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Coach Dev ",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/8uditacoach dev FRONT.jpg`,
        isWhite: true,
        type: "other"
      },
      {
        name: "Drama: Sister Act",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/9SisterAct208Front.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Family Dentistry",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/10DentistPVO114.jpg`,
        isWhite: true,
        type: "other"
      },
      {
        name: "Applied Materials",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/10ESTfrontgraphic.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Birthday",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/10PVOBirthday45.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "D'Winnipegers",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/10PVOCommunityClubfrontgraphic.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Family",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/10PVOfamilyfrontgraphic.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Voices of San Jose",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/10PVOVoicesofSanJose0228.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Pirate Crew",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/13piratecrew0503-01.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Elijah Elisha",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/13sjcac1221frontgr.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Point Power Inc.",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/C4pointElectric1108.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "PHHS Staff",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/DTGStaffShirts.jpg`,
        isWhite: true,
        type: "other"
      },
      {
        name: "Drama: DTTWHHMTS",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/Drama Front 2021.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Therma",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other/Therma 2021.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "IHS German",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other_school/1IHSGerman0219Front.jpg`,
        isWhite: true,
        type: "other-school"
      },
      {
        name: "Mt. Pleasant",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other_school/1MtPleasant0307FrontGraphic.jpg`,
        isWhite: false,
        type: "other-school"
      },
      {
        name: "Noble Staff",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other_school/1NobleStaff1201Front.jpg`,
        isWhite: false,
        type: "other-school"
      },
      {
        name: "Ruskin Mr. Amutan",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other_school/1Ruskin1014Front.jpg`,
        isWhite: false,
        type: "other-school"
      },
      {
        name: "Silver Creek FLBA",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other_school/1SCFBLA1019.jpg`,
        isWhite: false,
        type: "other-school"
      },
      {
        name: "Evergreen Valley CSF",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other_school/3EVCSF0324(front).jpg`,
        isWhite: false,
        type: "other-school"
      },
      {
        name: "Ruskin Mrs. Paddock",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other_school/3PaddockRuskin1123_FrontGraphic.jpg`,
        isWhite: false,
        type: "other-school"
      },
      {
        name: "Silver Creek HS",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other_school/3SCHSLeadership0319(front).jpg`,
        isWhite: false,
        type: "other-school"
      },
      {
        name: "SCHS Lion Dance",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other_school/3SCHSLionDance_Front.jpg`,
        isWhite: false,
        type: "other-school"
      },
      {
        name: "Silver Creek HS",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other_school/3SCHSLongsleeve0324(front).jpg`,
        isWhite: true,
        type: "other-school"
      },
      {
        name: "Silver Creek HS",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other_school/3SCHSTshirts0324(front-white).jpg`,
        isWhite: true,
        type: "other-school"
      },
      {
        name: "Silver Creek HS",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other_school/3SCHSZipup0324(front).jpg`,
        isWhite: false,
        type: "other-school"
      },
      {
        name: "SCHS Unicef",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other_school/3Unicef(front).jpg`,
        isWhite: false,
        type: "other-school"
      },
      {
        name: "IHS Drama",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other_school/4ihsdrama0323front.jpg`,
        isWhite: false,
        type: "other-school"
      },
      {
        name: "PMS Choir",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other_school/4pmsmusic0126.jpg`,
        isWhite: false,
        type: "other-school"
      },
      {
        name: "Ruskin Speech",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other_school/4ruskinspeechwhite0121.jpg`,
        isWhite: true,
        type: "other-school"
      },
      {
        name: "SMS Music Deparment",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other_school/4smsmusic1022.jpg`,
        isWhite: true,
        type: "other-school"
      },
      {
        name: "Ruskin PTA",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other_school/5ruskinpta1111 - Front Design.jpg`,
        isWhite: false,
        type: "other-school"
      },
      {
        name: "Pegasus HS",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other_school/8pegasushs0318.jpg`,
        isWhite: false,
        type: "other-school"
      },
      {
        name: "Oak Grove HS",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other_school/10OakGrovefrontgraphic.jpg`,
        isWhite: false,
        type: "other-school"
      },
      {
        name: "Adelante Sports",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other_school/13adelantesports1015 - graphic-01.jpg`,
        isWhite: false,
        type: "other-school"
      },
      {
        name: "Noble PTA",
        src: `${process.env.PUBLIC_URL}/portfolio/2022/other_school/CnoblePTA0807.jpg`,
        isWhite: false,
        type: "other-school"
      } 
    ]
  },
  {
    id: uuidv4(),
    year: "2020-2021",
    images: [
      {
        name: "PHHS 2021",
        src: `${process.env.PUBLIC_URL}/portfolio/2021/class/Class Of 2021 2021.jpg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "Insane Ink",
        src: `${process.env.PUBLIC_URL}/portfolio/2021/class/Insane Ink 2020 Back.jpg`,
        isWhite: true,
        type: "class"
      },
      {
        name: "Ms. Murray",
        src: `${process.env.PUBLIC_URL}/portfolio/2021/class/Murray 2020.jpg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "Ms. Murray (Masks)",
        src: `${process.env.PUBLIC_URL}/portfolio/2021/class/Murray Mask 2021.jpg`,
        isWhite: true,
        type: "class"
      },
      {
        name: "Treasure Trove",
        src: `${process.env.PUBLIC_URL}/portfolio/2021/class/PHHS Spring 2021 (2).jpg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "Treasure Trove",
        src: `${process.env.PUBLIC_URL}/portfolio/2021/class/PHHS Spring 2021.jpg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "Treasure Trove",
        src: `${process.env.PUBLIC_URL}/portfolio/2021/class/PHHS Winter 2020.jpg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "PHHS Staff",
        src: `${process.env.PUBLIC_URL}/portfolio/2021/class/Pirate Staff 2020.jpg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "Mr. Kiesle (Masks)",
        src: `${process.env.PUBLIC_URL}/portfolio/2021/club/Kiesle Masks 2020.jpg`,
        isWhite: true,
        type: "club"
      },
      {
        name: "Girls Tennis",
        src: `${process.env.PUBLIC_URL}/portfolio/2021/club/PHHS Girls Tennis 2021.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "Instrumental Council",
        src: `${process.env.PUBLIC_URL}/portfolio/2021/club/PHHS Instrumental Council 2021.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "She Is The First",
        src: `${process.env.PUBLIC_URL}/portfolio/2021/club/PHHS She Is The First 2021.jpg`,
        isWhite: true,
        type: "club"
      },
      {
        name: "Boys Volleyball",
        src: `${process.env.PUBLIC_URL}/portfolio/2021/club/Volleyball 2021.jpg`,
        isWhite: true,
        type: "club"
      },
      {
        name: "Claro's Birthday",
        src: `${process.env.PUBLIC_URL}/portfolio/2021/other/Claros 2020.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Danzel",
        src: `${process.env.PUBLIC_URL}/portfolio/2021/other/Danzel 2021.jpg`,
        isWhite: true,
        type: "other"
      },
      {
        name: "Merchant",
        src: `${process.env.PUBLIC_URL}/portfolio/2021/other/Merchant 2021.jpg`,
        isWhite: true,
        type: "other"
      },
      {
        name: "IHS Boys Tennis",
        src: `${process.env.PUBLIC_URL}/portfolio/2021/other_school/Boys Tennis 2021.jpg`,
        isWhite: false,
        type: "other-school"
      },
      {
        name: "IHS Girls Tennis",
        src: `${process.env.PUBLIC_URL}/portfolio/2021/other_school/Girls Tennis 2021.jpg`,
        isWhite: false,
        type: "other-school"
      },
      {
        name: "IHS Counseling",
        src: `${process.env.PUBLIC_URL}/portfolio/2021/other_school/IHS Counseling 2020.jpg`,
        isWhite: true,
        type: "other-school"
      }
    ]
  },
  {
    id: uuidv4(),
    year: "2019-2020",
    images: [
      {
        name: "AP Bio",
        src: `${process.env.PUBLIC_URL}/portfolio/2020/class/APBio 2019.jpg`,
        isWhite: true,
        type: "class"
      },
      {
        name: "AP Lit",
        src: `${process.env.PUBLIC_URL}/portfolio/2020/class/APLit 2020.jpg`,
        isWhite: true,
        type: "class"
      },
      {
        name: "AP Psych",
        src: `${process.env.PUBLIC_URL}/portfolio/2020/class/APPsych 2020.jpg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "Culinary",
        src: `${process.env.PUBLIC_URL}/portfolio/2020/class/Culinary 2019.jpg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "Physiology",
        src: `${process.env.PUBLIC_URL}/portfolio/2020/class/Physiology 2019.jpg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "Filipino Club",
        src: `${process.env.PUBLIC_URL}/portfolio/2020/club/Filipino Club 2019.jpg`,
        isWhite: true,
        type: "club"
      },
      {
        name: "Girls Tennis",
        src: `${process.env.PUBLIC_URL}/portfolio/2020/club/Girl's Tennis 2019.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "Interact",
        src: `${process.env.PUBLIC_URL}/portfolio/2020/club/Interact 2020.jpg`,
        isWhite: true,
        type: "club"
      },
      {
        name: "Fruits Of The Spirit",
        src: `${process.env.PUBLIC_URL}/portfolio/2020/other/Fruits Of The Spirit 2019.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Jam Choir",
        src: `${process.env.PUBLIC_URL}/portfolio/2020/other/Jam Choir 2020.jpg`,
        isWhite: true,
        type: "other"
      },
      {
        name: "Santa Paws",
        src: `${process.env.PUBLIC_URL}/portfolio/2020/other/Santa Paws 2020.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Therma",
        src: `${process.env.PUBLIC_URL}/portfolio/2020/other/Therma 2020.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "MHS Robotics",
        src: `${process.env.PUBLIC_URL}/portfolio/2020/other_school/MHS Robotics 2020.jpg`,
        isWhite: false,
        type: "other-school"
      },
      {
        name: "MHS Trojan Olympics",
        src: `${process.env.PUBLIC_URL}/portfolio/2020/other_school/MHS TrojanOlympics 2019.jpg`,
        isWhite: false,
        type: "other-school"
      },
      {
        name: "Mt. Pleasant",
        src: `${process.env.PUBLIC_URL}/portfolio/2020/other_school/MT Pleasant 2020.jpg`,
        isWhite: true,
        type: "other-school"
      },
      {
        name: "Ruskin",
        src: `${process.env.PUBLIC_URL}/portfolio/2020/other_school/Ruskin 2019.jpg`,
        isWhite: false,
        type: "other-school"
      },
      {
        name: "SMS Music Deparment",
        src: `${process.env.PUBLIC_URL}/portfolio/2020/other_school/SMS Music 2019.jpg`,
        isWhite: false,
        type: "other-school"
      }
    ]
  },
  {
    id: uuidv4(),
    year: "2018-2019",
    images: [
      {
        name: "AP Chem",
        src: `${process.env.PUBLIC_URL}/portfolio/2019/class/APChem 2018.jpg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "Mr. Flores",
        src: `${process.env.PUBLIC_URL}/portfolio/2019/class/Flores 2018.jpg`,
        isWhite: true,
        type: "class"
      },
      {
        name: "Memeology",
        src: `${process.env.PUBLIC_URL}/portfolio/2019/club/AntiMeme 2018.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "Male Cheer",
        src: `${process.env.PUBLIC_URL}/portfolio/2019/club/MaleCheer 2018.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "Memeology",
        src: `${process.env.PUBLIC_URL}/portfolio/2019/club/Memeology 2018.jpg`,
        isWhite: true,
        type: "club"
      },
      {
        name: "PXM",
        src: `${process.env.PUBLIC_URL}/portfolio/2019/club/PXM 2018.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "Jog A Thon",
        src: `${process.env.PUBLIC_URL}/portfolio/2019/other/JogAThon 2018.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "PHHS Juniors",
        src: `${process.env.PUBLIC_URL}/portfolio/2019/other/Juniors 2018.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Powder Puff",
        src: `${process.env.PUBLIC_URL}/portfolio/2019/other/PowderPuff 2018.jpg`,
        isWhite: true,
        type: "other"
      },
      {
        name: "Drama: Radium Girls",
        src: `${process.env.PUBLIC_URL}/portfolio/2019/other/RadiumGirls 2018.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "4th Grade Penguins",
        src: `${process.env.PUBLIC_URL}/portfolio/2019/other_school/4thGradePenguins 2018.jpg`,
        isWhite: true,
        type: "other-school"
      }
    ]
  },
  {
    id: uuidv4(),
    year: "2017-2018",
    images: [
      {
        name: "AP Bio",
        src: `${process.env.PUBLIC_URL}/portfolio/2018/class/APBio 2017.jpg`,
        isWhite: true,
        type: "class"
      },
      {
        name: "AP Lang",
        src: `${process.env.PUBLIC_URL}/portfolio/2018/class/APLang 2017.jpg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "Forensics",
        src: `${process.env.PUBLIC_URL}/portfolio/2018/class/Forensics 2017.jpg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "Physiology",
        src: `${process.env.PUBLIC_URL}/portfolio/2018/class/Physio 2017.jpg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "Anime",
        src: `${process.env.PUBLIC_URL}/portfolio/2018/club/Anime 2017.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "Bittles",
        src: `${process.env.PUBLIC_URL}/portfolio/2018/club/Bittles 2017.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "Girls Tennis",
        src: `${process.env.PUBLIC_URL}/portfolio/2018/club/Girlstennis 2017.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "KEY",
        src: `${process.env.PUBLIC_URL}/portfolio/2018/club/Key 2017.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "Polynesian",
        src: `${process.env.PUBLIC_URL}/portfolio/2018/club/Polynesian 2017 (2).jpg`,
        isWhite: true,
        type: "club"
      },
      {
        name: "Polynesian",
        src: `${process.env.PUBLIC_URL}/portfolio/2018/club/Polynesian 2017.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "SXC",
        src: `${process.env.PUBLIC_URL}/portfolio/2018/club/SXC 2017.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "Treblemakers",
        src: `${process.env.PUBLIC_URL}/portfolio/2018/club/Treblemakers 2017.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "Alzheimers Walk",
        src: `${process.env.PUBLIC_URL}/portfolio/2018/other/AlzheimersWalk 2017.jpg`,
        isWhite: true,
        type: "other"
      },
      {
        name: "Pick Me Up",
        src: `${process.env.PUBLIC_URL}/portfolio/2018/other/PickMeUp 2017.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Santa Paws",
        src: `${process.env.PUBLIC_URL}/portfolio/2018/other/SantaPaws 2017.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Tang Viet Trip",
        src: `${process.env.PUBLIC_URL}/portfolio/2018/other/TangVietnameseTrip 2017.jpg`,
        isWhite: true,
        type: "other"
      },
      {
        name: "Therma",
        src: `${process.env.PUBLIC_URL}/portfolio/2018/other/Therma 2017.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "J.F. Smith School",
        src: `${process.env.PUBLIC_URL}/portfolio/2018/other_school/JFSS 2017.jpg`,
        isWhite: false,
        type: "other-school"
      },
      {
        name: "PMS Yearbook",
        src: `${process.env.PUBLIC_URL}/portfolio/2018/other_school/PMS Yearbook 2017.jpg`,
        isWhite: false,
        type: "other-school"
      },
      {
        name: "Ruskin Mr. Macdonald",
        src: `${process.env.PUBLIC_URL}/portfolio/2018/other_school/Ruskin 2017.jpg`,
        isWhite: false,
        type: "other-school"
      }
    ]
  },
  {
    id: uuidv4(),
    year: "2016-2017",
    images: [
      {
        name: "AP Lit",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/class/APLit 2016.jpg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "AP Calculus BC",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/class/CalcBC 2016.jpg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "Choir",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/class/Choir 2016.jpg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "Insane Ink",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/class/InsaneInk 2016.jpg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "Phych",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/class/Psych 2016.jpg`,
        isWhite: false,
        type: "class"
      },
      {
        name: "WHAP",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/class/WHAP 2016.jpg`,
        isWhite: true,
        type: "class"
      },
      {
        name: "Yearbook",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/class/Yearbook 2016.jpg`,
        isWhite: true,
        type: "class"
      },
      {
        name: "Bloomers",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/club/Bloomers 2016.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "Cross Country",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/club/CrossCountry 2016.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "Hungama",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/club/Hungama 2016.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "Indian",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/club/Indian 2016.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "Mock Trial",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/club/MockTrial 2016.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "Paws",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/club/Paws 2016.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "Polynesian",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/club/Polynesian 2016.jpg`,
        isWhite: true,
        type: "club"
      },
      {
        name: "Swim",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/club/Swim 2016.jpg`,
        isWhite: true,
        type: "club"
      },
      {
        name: "Accele-Ran-Do",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/other/Accele-ran-do 2016.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "ACT 4 E",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/other/ACT4E 2016.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Hands",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/other/Hands 2016.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Tacos El Compa",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/other/TacosElCompa 2016.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Thien Vu",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/other/ThienVu 2016.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Treasure Trove",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/other/TreasureTrove 2016.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "Viet Cancer Awareness",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/other/VietCancerAwareness 2016.jpg`,
        isWhite: true,
        type: "other"
      },
      {
        name: "CHS Basketball",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/other_school/CHS Basketball 2016.jpg`,
        isWhite: false,
        type: "other_school"
      },
      {
        name: "EVHS Link",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/other_school/EVHS Link 2016.jpg`,
        isWhite: false,
        type: "other_school"
      },
      {
        name: "GECA ASB",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/other_school/GECA ASB 2016.jpg`,
        isWhite: false,
        type: "other_school"
      },
      {
        name: "IHS KEY",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/other_school/IHS Key 2016.jpg`,
        isWhite: true,
        type: "other_school"
      },
      {
        name: "IHS Volleyball",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/other_school/IHS Volleyball 2016.jpg`,
        isWhite: false,
        type: "other_school"
      },
      {
        name: "JFS",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/other_school/JFS 2016.jpg`,
        isWhite: false,
        type: "other_school"
      },
      {
        name: "Ruskin Mr. Lee",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/other_school/Ruskin 2016 (2).jpg`,
        isWhite: false,
        type: "other_school"
      },
      {
        name: "Ruskin",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/other_school/Ruskin 2016 (3).jpg`,
        isWhite: false,
        type: "other_school"
      },
      {
        name: "Ruskin",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/other_school/Ruskin 2016.jpg`,
        isWhite: false,
        type: "other_school"
      },
      {
        name: "Silver Creek Leadership",
        src: `${process.env.PUBLIC_URL}/portfolio/2017/other_school/SC Leadership 2016.jpg`,
        isWhite: false,
        type: "other_school"
      }
    ]
  },
  {
    id: uuidv4(),
    year: "Before 2016",
    images: [
      {
        name: "Anime 2008",
        src: `${process.env.PUBLIC_URL}/portfolio/2016/club/Anime 2008.jpg`,
        isWhite: false,
        type: "club"
      },
      {
        name: "Ark",
        src: `${process.env.PUBLIC_URL}/portfolio/2016/club/Ark.jpg`,
        isWhite: true,
        type: "club"
      },
      {
        name: "PHHS 1967",
        src: `${process.env.PUBLIC_URL}/portfolio/2016/other/Pirates 1967.jpg`,
        isWhite: true,
        type: "other"
      },
      {
        name: "PHHS",
        src: `${process.env.PUBLIC_URL}/portfolio/2016/other/PirateWay.jpg`,
        isWhite: false,
        type: "other"
      },
      {
        name: "SJSU",
        src: `${process.env.PUBLIC_URL}/portfolio/2016/other_school/SJSU.jpg`,
        isWhite: true,
        type: "other-school"
      }

    ]
  },
];

export default dataSlider;
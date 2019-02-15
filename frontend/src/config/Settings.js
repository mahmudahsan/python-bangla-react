// Site's Configuration
/**
 * @author Mahmud Ahsan <https://github.com/mahmudahsan>
 */

const Config = {
  logoAlt: 'পাইথন বাংলা',
  imageBaseUrl: "/",
  menu: {
    // [menu, path, firebase-collection-name]
    menu1: ["বিগিনার", "/", 'beginner'],
    menu2: ["অ‍্যাডভান্সড", "/advanced", 'advanced'],
    menu3: ["জ‍্যাঙ্গো ওয়েব", "/django", 'django'],
    menu4: ["HTML|CSS", "/html-css", 'html'],
    menu5: ["Python English", "/python-tutorials", 'english'],
    menu6: ["ব্লগ", "ext", "http://thinkdiff.net"],
    menu7: ["মোবাইল অ‍্যাপস", "ext", "http://ithinkdiff.net"],
  },
  social: {
    facebook: "https://www.facebook.com/thinkdiff.net/",
    twitter:  "http://twitter.com/mahmudahsan",
    github:   "https://github.com/mahmudahsan/pythonbangla.com",
    linkedin: "https://www.linkedin.com/in/mahmudahsan/",
    youtube:  "https://www.youtube.com/c/banglaprogramming",
  }
}

export default Config;

const Cards = [
  {
    title_english: "Python Beginner",
    title_other: "পাইথন বিগিনার",
    short_desc: "পাইথন কি, কিভাবে পাইথন সেটআপ করতে হয়, কিভাবে কোড লিখে রান করতে হয় এরকম অনেক দরকারি এবং বেসিক পাইথন প্রোগ্রামিং বিষয় নিয়ে ১৪টা ভিডিও টিউটোরিয়ালের মাধ‍্যমে আলোচনা করা হয়েছে",
    image: "py-beg.png",
    title_other_css_class: 'color1'
  },
  {
    title_english: "Python Advanced",
    title_other: "পাইথন এডভান্সড",
    short_desc: "পাইথন দিয়ে এডভান্সড কাজ করতে চাইলে যেমন ওয়েবপেজ স্ক্র‍্যাপিং, এসকিউএল ডাটাবেজ, ওয়েবপেজ টেস্টি, রেগুলার এক্সপ্রেশন, ওয়েব অটোমেশন এসব নিয়ে আলোচনা",
    image: "py-adv.png",
    title_other_css_class: 'color2'
  },
  {
    title_english: "Python Django",
    title_other: "জ‍্যাঙ্গো ওয়েব ফ্রেমওয়ার্ক",
    short_desc: "এই সিরিজ টিউটোরিয়ালে পাইথনের জ‍্যাঙ্গো ওয়েব ফ্রেমওয়ার্ক দিয়ে ওয়েব অ‍্যাপ্লিকেশন বানানোর খুটিনাটি বিষয় থেকে শুরু করে ডাটাবেজ, সার্ভারে আপলোড করা এসব নিয়ে আলোচনা করা হয়েছে",
    image: "py-django.png",
    title_other_css_class: 'color3'
  },
  {
    title_english: "HTML CSS",
    title_other: "ওয়েবপেজ ডিজাইন",
    short_desc: "ওয়েব ডিজাইনার অথবা ওয়েব ডেভলপার হতে হলে এইচটিএমএল এবং সিএসএস সম্পর্কে ব‍্যাসিক নলেজ থাকা অত‍্যাবশ‍্যক। এই সিরিজে আমি এইচটিএমএল এবং সিএসএস দিয়ে ওয়েব ডিজাইন আলোচনা করেছি।",
    image: "py-web.png",
    title_other_css_class: 'color4'
  },
  {
    title_english: "Python English",
    title_other: "Python Tutorials",
    short_desc: "I periodically write Python programming related English blog posts which are mentioned in this section.",
    image: "py-english.png",
    title_other_css_class: 'color5',
  }
];

export {Cards};
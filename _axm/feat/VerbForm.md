---
layout: feature
title: 'VerbForm'
shortdef: 'form of verb or deverbative'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Conv">Conv</a></td>
  <td><a href="#Fin">Fin</a></td>
  <td><a href="#Gdv">Gdv</a></td>
  <td><a href="#Inf">Inf</a></td>
  <td><a href="#Part">Part</a></td>
</tr>
</table>


### <a name="Fin">`Fin`</a>: finite verb

Rule of thumb: if it has non-empty [Mood](), it is finite. In Armenian this applies to conditional (also to [connegative](Connegative)), indicative, imperative and subjunctive forms.

#### Examples

* _կու գնամ, կու գնաս, կու գնայ, կու գնամք (գնանք), կու գնաք, կու գնան_ “I will go, you will go, he/she/it will go, we will go, you will go, they will go”,
* _գիտեմ, գիտես, գիտէ, գիտեմք (գիտենք), գիտէք, գիտեն_ “I know, you know, he/she/it knows, we know, you know, they know”,
* _մնացի, մնացեր, մնաց, մնացաք, մնացէք, մնացին_ “I stayed, you stayed, he/she/it stayed, we stayed, you stayed, they stayed”,
* _եմ, ես, է, եմք, էք, են_ “I am, you are, he/she/it is, we are, you are, they are”,
* _աղա՛, աղացե՛ք_ “grind” (imperative in different numbers),
* _գրեմ, գրես, գրէ, գրեմք, գրէք, գրեն_ “I write.`Sub`, you write.`Sub`, he/she/it write.`Sub`, we write.`Sub`, you write.`Sub`, they write.`Sub`”

### <a name="Inf">`Inf`</a>: infinitive

Infinitive is the citation form of verbs. In Middle Armenian it has non-finite form. It appears as the argument of other verbs.
When used with the negative forms of the auxiliary verb _եմ/em_ (and the preposition _ի/i_), it conveys the negative present indicative.
The infinitive shares properties of verbs and nouns. It inflects for [Case](), [Definite](), [Number](), [Number[psor]]() and [Person[psor]]().
Note that in Middle Armenian grammar, the genitive-dative case of the infinitive is treated as a future participle, regardless of whether it functions as a verbal
tense (with an auxiliary verb) or as a modifier (with a noun). However, we shall apply the principle of Modern Armenian (Eastern and Western), where only the form
used with an auxiliary verb (to create the future tense of the indicative mood) is considered a future participle.

#### Examples

* _Որով զոք դատիս՝ Նոյն դատաստան կամիս <b>կրել</b>/Orov zok’ datis՝ Noyn datastan kamis krel_ “The judgment you pass on others is the same one you are willing <b>to face</b> yourself”,
* _Պատրաստ եմ <b>մեռանել</b> վասն անուան նորին/Patrast em meṙanel vasn anowan norin_ “I am ready to die for his name”,
* _Մի՞թէ <b>մեռանելոյ</b> օրս մոտեցաւ/mit’ē meoaneloy òrs motec’aw_ “Has my day <b>to die</b> really come”,
* _Եւ զայդ ի <b>դողալուն</b> ատենէ սկիզբն արա/ew zayd i doġalown atenē skizbn ara_ “And start this from the moment of <b>trembling</b>”

  
### <a name="Part">`Part`</a>: participle, verbal adjective

Participle is a non-finite verb form that shares properties of verbs and adjectives. In Middle Armenian it may be used to form complex tenses and can be also used purely adjectively.

In Middle Armenian grammar, these words are normally called _converbs_. However, since the UD definition `Part` partially covers the use of converbs, we use the same label.

Note, that the so called _negative participle_ is used to form negated periphrastic conditional forms. We mark them [Connegative]().

Middle Armenian has six types of participles:

- The resultative participle is used to form the indicative mood in present and imperfect resultative. It can be used adjectively and can be negated.
- The subject participle can be used only adjectively and can be negated.
- The imperfective participle is used to form the indicative mood in present or imperfect tense. It is formed with two endings: _-իս/-is_, which is attached to the infinitive, and _-ում/-owm_, which is attached to the verb stem.
- The future participle is used to form the indicative mood in present future or imperfect future (future-in-the-past) tense. Some of its forms (mainly with the ending _-ի/-i_ attached to the infinitive) can be used only adjectively and can be negated.
- The past participle is the continuation of the Classical Armenian past participle into the Middle Armenian. While in Classical Armenian this form could convey both active and passive meanings, in Middle Armenian it increasingly trends toward a passive sense, although a new passive infix (_-ու-/-ow-_) has already emerged. It can be used adjectively or substantively.
- The perfect participle is used to form the indicative mood in present perfect or imperfect-in-the-past (past perfect) tense. This participle may have two endings: either _-լ/-l_ or _-ր/-r_. In Middle Armenian it can be used adjectively.


Note that the resultative, past and perfect participles can be used to form the secondary compound tenses (with the auxiliary _լինել_ in any tense or mood).

Participles will have [Aspect](), [Voice]() and [Subcat]().

#### Examples

* _քաղած/k’aġaç, բերած/beraç, պարգևված/pargewvaç, խառնուած/xaṙnowaç, փռված/p’ṙvaç_ “slept, written, sent, raised” (resultative participle, in different voices),
* _ստեղծող/steġçoġ, նախշող/naxšoġ, խնդացող/xndac’oġ, թուլացնող/t’owlac’noġ, կարմրցնող/karmrc’noġ_ “(smth.) creating, decorating, laughing, weakening, reddening” (subject participle, in different voices),
* _տեսնում/tesnowm, խօսում/xòsowm, հեռանալիս/heṙanalis, դողալիս/doġalis_ “see(ing), speak(ing), leav(ing), trembl(ing)” (imperfective participle, in different voices),
* _տանելու/tanelow, չորացնելու/čorac’nelow, անցանելու/anc’anelow, գնալու/owteloy, ճանաչելի/č̣anačeli_ “for taking, for drying, for passing, for going, smth. that can be recognized” (future participle, in different voices),
* _լցեալ/lc’eal, հեծեալ/heçeal, մեռեալ/meṙeal, բացուեալ/bac’oweal_ “filled, mounted, dead, opened” (past participle, in different voices)
* _ասել/asel, մնացել/mnac’el, հագեր/hager, արբեցուցեր/arbec’owc’er_“have told, have remained, have dressed, have made (someone) drunk” (perfect participle, in different voices),


<!-- Interlanguage links updated St 12. listopadu 2025, 09:20:54 CET -->

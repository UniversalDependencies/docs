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

Rule of thumb: if it has non-empty [Mood](), it is finite. In Armenian this applies to indicative (also to its [connegative](Connegative) form), imperative and subjunctive forms.

#### Examples

* _գիտեմ_/_gitem_ “I know”, _գիտես_/_gites_ “you know”, _գիտէ_/_gitē_ “he/she/it knows”, _գիտենք_/_gitenkʼ_ “we know”, _գիտէք_/_gitēkʼ_ “you know”, _գիտեն_/_giten_ “they know”,
* _վազեցի_/_vazecʼi_ “I ran”, _վազեցիր_/_vazecʼir_ “you ran”, _վազեց_/_vazecʼ_ “he/she/it ran”, _վազեցինք_/_vazecʼinkʼ_ “we ran”, _վազեցիք_/_vazecʼikʼ_ “you ran”, _վազեցին_/_vazecʼin_ “they ran”,
* _եմ_/_em_ “I am”, _ես_/_es_ “you are”, _է_/_ē_ “he/she/it is”, _ենք_/_enkʼ_ “we are”,_էք_/_ēkʼ_ “you are”, _են_/_en_ “they are”,
* _գնա՛_/_gna՛_, _գնացե՛ք_/_gnacʼe՛kʼ_ “go!” (imperative in different numbers),
* _կարդամ_/_kardam_ “I go `Sub`”, _կարդաս_/_kardas_ “you go `Sub`”, _կարդայ_/_karda_ “he/she/it go `Sub`”, _կարդանք_/_kardankʼ_ “we go `Sub`”, _կարդաք_/_kardakʼ_ “you go `Sub`”, _կարդան_/_kardan_ “they go `Sub`”.

### <a name="Inf">`Inf`</a>: infinitive

Infinitive is the citation form of verbs. In Armenian, the infinitive is a non-finite verb form. It is used with the auxiliary _տալ_/_tal_ to form periphrastic causative voice, and it can also function as an argument of other verbs.
The infinitive shares properties of verbs and nouns. It inflects for [Case](), [Definite](), [Number](), [Number[psor]]() and [Person[psor]]().

#### Examples

* _<b>դիտել</b> տուի_/_<b>ditel</b> towi_ “I had [someone] <b>notice</b>”,
* _Խոստացայ <b>երթալ</b>_/_karoġ es <b>šarownakel</b>_ “I promised <b>to go</b>”,
* _կ՚աղաչէ <b>չերթալ</b>_k՚aġačē <b>čertʼal</b>_ “he/she begs not to go”
* _պիտի գայ <b>ընթրելու</b>_/_piti gay <b>ëntʼrelow</b>_ “he/she will come <b>to have dinner</b> / for dinner”,
* _Գլուխ <b>քերելու</b> ժամանակ չունիմ_/_Glowx <b>kʼerelow</b> žamanak čownim_ “lit: she was used to <b>giving birth</b> alone”,
* _<b>սորվելէ</b> ետք_/_<b>sorvelē</b> etkʼ_ “after <b>learning</b>”,
* _<b>խօսելով</b> ժամանակ անցընել_/_<b>xòselov</b> žamanak ancʼënel_ “to spend time <b>talking</b>”,
* _<b>քալելով</b> պիտի երթամ_/_<b>vazelov</b> ekav_ “lit: he came <b>running</b>”,
* _<b>ճառելում</b> նա հմուտ էր_/_<b>č̣aṙelowm</b> na hmowt ēr_ “lit: he was skilled <b>in delivering speeches</b>”

### <a name="Part">`Part`</a>: participle, verbal adjective

Participles are non-finite verb forms that share properties of verbs and adjectives. In Armenian, some participles may be used to form complex tenses and can also be used adjectively. Nevertheless, they are always annotated as [verb](VERB).

In Modern Armenian grammar, _converbs_ and _participles_ are not distinguished. Since the UD definition `Part` partially covers the use of converbs, we use the same label for both. We use _converb_ only for the adverbial participle, e.g. _վազելիս_/_vazelis_ “while running”, _խաղալիս_/_xaġalis_ “while playing” (see below).  

Note that the so-called _negative participle_ is used to form negated periphrastic conditional forms. We mark them [Connegative]().

Armenian has seven types of participles:

- The resultative participle is used to form the indicative mood in present perfect resultative, imperfect in the past resultative and proper resultative tense. It can be also used adjectively and can be negated.
- The subject participle can be used only adjectively and can be negated.
- The imperfective participle is used to form the indicative mood in present or imperfect tense.
- The future-I participle is used to form the indicative mood in present prospective (future) or imperfect prospective (future-in-the-past) tense.
- The future-II (state of prospective action) participle can be used only adjectively and can be negated.
- The perfect participle is used to form the indicative mood in present perfect or imperfect-in-the-past (past perfect) tense.
- The processual (progressive) participle is used to form the indicative mood in present or imperfect tense for the verbs _գալ_/_gal_ “to come”, _լալ_/_lal_ “to cry”, _տալ_/_tal_ “to give”.

Note that the processual (progressive), resultative and future-I participles can be used to form the secondary compound tenses (with the auxiliary _լինել_/_linel_ in any tense or mood).

Note also that resultative, subject and future-II participles, that fall in the gray zone between adjectives and participles and can be also used adjectively, are marked `Part` too.

Participles will have [Aspect](), [Voice]() and [Subcat]().

#### Examples

* _քնած_/_kʼnaç_ “slept”, _գրած_/_graç_ “written”, _ուղարկված_/_owġarkvaç_ “sent”, _կանգնեցված_/_kangnecʼvaç_ “raised” (resultative participle, in different voices),
* _գրող_/_groġ_ “(smth.) writing”, _մեռնող_/_meṙnoġ_ “dying”, _տվող_/_tvoġ_ “giving”, _եղող_/_eġoġ_ “beeing”, _բացվող_/_bacʼvoġ_ “opening” (subject participle, in different voices),
* _սիրում_/_sirowm_ “love”, _խոսվում_/_xosvowm_ “(is) spoken about”, _բարձրացվում_/_barjracʼvowm_ “(is) beeing raised” (imperfective participle, in different voices),
* _տեսնելու_/_tesnelow_ “for seeing”, _լվացվելու_/_lvacʼvelow_ “for washing”, _մեղմացվելու_/_meġmacʼvelow_ “for beeing extenuated” (future-I participle, in different voices),
* _կարդալիք_/_kardalikʼ_ “(smth.) to be read”, _կառուցվելիք_/_kaṙowcʼvelikʼ_ “to be built” (future-II participle, in different voices),
* _գնացել_/_gnacʼel_ “have gone”, _խմել_/_xmel_ “have drunk”, _դրել_/_drel_ “have put” (perfect participle, in different voices),
* _<b>գալիս</b> եմ/էի_/_<b>galis</b> em/ēi_ “I am/was <b>coming</b>”, _<b>տալիս</b> եմ/էի_/_<b>talis</b> em/ēi_ “I am/was <b>giving</b>”, _<b>լալիս</b> եմ/էի_/_<b>lalis</b> em/ēi_ “I am/was <b>crying</b>”, _<b>աշխատելիս</b> է եղել_/_<b>ašxatelis</b> ē eġel_ “he has been <b>working</b>” (processual participle in different moods and tenses)

### <a name="Conv">`Conv`</a>: converb, adverbial participle

The converb, also called the adverbial participle or transgressive, is a non-finite verb form that shares properties of verbs and adverbs. It typically expresses a meaning such as “while doing”. In Armenian, we use `VerbForm=Conv` only for the adverbial participle.

In colloquial Armenian, the ablative and instrumental case forms of the infinitive can also be used in a converb-like function, e.g. _կողքիցդ <b>անցնելուց</b> գլխիդ բամփել էր_/_koġkʼicʼd ancʼnelowcʼ glxid bampʼel ēr_ “he had smacked you on the head as he walked past you (while passing by you)”, or _աչքերը <b>սրբելով</b> մոտենում էր_/_ačkʼerë srbelov motenowm ēr_ “he/she was approaching, wiping his/her eyes”. Since traditional Armenian grammar treats these forms as case-inflected infinitives rather than as distinct converb forms, we likewise analyze them as case forms of the infinitive (VerbForm=Inf). Their adverbial function is instead captured syntactically by the [advcl]() relation.

Note that this does not apply to case forms of the infinitive used with adpositions. Such constructions are analyzed using the [obl]() relation, e.g. _լռելուց հետո ավելացրեց_/_lṙelowcʼ heto avelacʼrecʼ_ “After a pause (lit. after being silent), he/she added”.

#### Examples

* _պարտականությունները <b>կատարելիս</b>_ “<b>while carrying out</b> (one’s) duties”,
* _գրախանութ <b>մտնելիս</b>_ “<b>when entering </b> a bookstore”,
* _փողոցով <b>անցնելիս</b> չեմ խաչակնքվում_ “I don't cross myself <b>when walking</b> down the street”,
<!-- Interlanguage links updated Út 30. června 2026, 10:59:23 CEST -->

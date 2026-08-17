---
layout: feature
title: 'VerbForm'
shortdef: 'form of verb or deverbative'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Fin">Fin</a></td>
  <td><a href="#Inf">Inf</a></td>
  <td><a href="#Part">Part</a></td>
</tr>
</table>

### <a name="Fin">`Fin`</a>: finite verb

Rule of thumb: if it has non-empty [Mood](), it is finite.

#### Examples

* _գիտեմ_/_gitem_ “I know”, _գիտես_/_gites_ “you know”, _գիտէ_/_gitē_ “he/she/it knows”, _գիտենք_/_gitenkʼ_ “we know”, _գիտէք_/_gitēkʼ_ “you know”, _գիտեն_/_giten_ “they know”,
* _վազեցի_/_vazecʼi_ “I ran”, _վազեցիր_/_vazecʼir_ “you ran”, _վազեց_/_vazecʼ_ “he/she/it ran”, _վազեցինք_/_vazecʼinkʼ_ “we ran”, _վազեցիք_/_vazecʼikʼ_ “you ran”, _վազեցին_/_vazecʼin_ “they ran”,
* _եմ_/_em_ “I am”, _ես_/_es_ “you are”, _է_/_ē_ “he/she/it is”, _ենք_/_enkʼ_ “we are”,_էք_/_ēkʼ_ “you are”, _են_/_en_ “they are”,
* _գնա՛_/_gna՛_, _գնացե՛ք_/_gnacʼe՛kʼ_ “go!” (imperative in different numbers),
* _կարդամ_/_kardam_ “I read `Sub`”, _կարդաս_/_kardas_ “you read `Sub`”, _կարդայ_/_karday_ “he/she/it reads `Sub`”, _կարդանք_/_kardankʼ_ “we read `Sub`”, _կարդաք_/_kardakʼ_ “you read `Sub`”, _կարդան_/_kardan_ “they read `Sub`”.

### <a name="Inf">`Inf`</a>: infinitive

Infinitive is the citation form of verbs. In Western Armenian, the infinitive is a non-finite verb form. It is used with the auxiliary _տալ_/_tal_ to form periphrastic causative voice, and it can also function as an argument of other verbs.
The infinitive shares properties of verbs and nouns. It inflects for [Case](), [Definite](), [Number](), [Number[psor]]() and [Person[psor]]().

#### Examples

* _<b>դիտել</b> տուի_/_<b>ditel</b> towi_ “I had [someone] <b>notice</b>”,
* _Խոստացայ <b>երթալ</b>_/_Xostacʼay <b>ertʼal</b>_ “I promised <b>to go</b>”,
* _կ՚աղաչէ <b>չերթալ</b>_/_k՚aġačē <b>čertʼal</b>_ “he/she begs <b>not to go</b>”
* _պիտի գայ <b>ընթրելու</b>_/_piti gay <b>ëntʼrelow</b>_ “he/she will come <b>to have dinner</b> / for dinner”,
* _Գլուխ <b>քերելու</b> ժամանակ չունիմ_/_Glowx <b>kʼerelow</b> žamanak čownim_ “I don't have time <b>to scratch</b> my head”,
* _<b>սորվելէ</b> ետք_/_<b>sorvelē</b> etkʼ_ “after <b>learning</b>”,
* _<b>խօսելով</b> ժամանակ անցընել_/_<b>xòselov</b> žamanak ancʼënel_ “to spend time <b>talking</b>”,
* _<b>քալելով</b> պիտի երթամ_/_<b>kʼalelov</b> piti ertʼam_ “I will go <b>by walking</b>”.

### <a name="Part">`Part`</a>: participle, verbal adjective

Participles are non-finite verb forms that share properties of verbs and adjectives. In Western Armenian, some participles may be used to form complex tenses and can also be used adjectively. Nevertheless, they are always annotated as [verb](VERB).

In Western Armenian grammar, _converbs_ and _participles_ are not distinguished. Note that the ablative and instrumental case forms of the infinitive can be used adverbially, including to express an action occurring simultaneously with the main action, and thus may have a converb-like function. In such uses, they retain their morphological analysis as infinitives (VerbForm=Inf), while their adverbial function is captured syntactically by the `advcl` relation (e.g. _Թփերուն ետեւէն կաղալէն եւ հայհոյելէն Պօղոս աղբարը կ՚ելլէ:_/_Tʼpʼerown etewēn kaġalēn ew hayhoyelēn Pòġos aġbarë k՚ellē._ “Uncle Boghos emerges from behind the bushes, limping and cursing.”).

Western Armenian has six types of participles:

- The resultative participle is used to form the indicative mood in present perfect resultative and imperfect in the past resultative tense. It can be also used adjectively and can be negated.
- The subject participle can be used only adjectively and can be negated.
- The future-I participle is used to form the indicative mood in present prospective (future) or imperfect prospective (future-in-the-past) tense.
- The future-II (state of prospective action) participle can be used only adjectively and can be negated.
- The perfect participle is used to form the indicative mood in present perfect or imperfect-in-the-past (past perfect) tense.
- The negative participle is used to form negated periphrastic indicative forms. We mark them [Connegative]().

Note that the resultative and future-I participles can be used to form the secondary compound tenses (with the auxiliary _ըլլալ_/_ëllal_ in any tense or mood).

Note also that resultative, subject and future-II participles that fall in the gray zone between adjectives and participles and can also be used adjectively, are marked `Part` too.

Participles will have [Aspect](), [Voice]() and [Subcat]().

#### Examples

* _արթնցած_/_artʼncʼaç_ “woken up”, _գրած_/_graç_ “written”, _ուղարկուած_/_owġarkowaç_ “sent”, _ներկայացուած_/_nerkayacʼowaç_ “presented” (resultative participle, in different voices),
* _գրող_/_groġ_ “(smth.) writing”, _հասնող_/_hasnoġ_ “reaching”, _տուող_/_towoġ_ “giving”, _եղող_/_eġoġ_ “being”, _բացուող_/_bacʼowoġ_ “opening” (subject participle, in different voices),
* _տեսնելու_/_tesnelow_ “(for) seeing”, _հանելու_/_hanelow_ “(for) removing”, _վերացուելու_/_veracʼowelow_ “(for) being eliminated” _անցնելու_/_ancʼnelow_ “(for) passing” (future-I participle, in different voices),
* _գալիք_/_galikʼ_ “coming”, _գիտնալիք_/_gitnalikʼ_ “(smth.) to be known”, _գտնուելիք_/_gtnowelikʼ_ “to be found” (future-II participle, in different voices),
* _գացեր_/_gacʼer_ “have gone”, _կերեր_/_kerer_ “have eaten”, _դրեր_/_drer_ “have put” (perfect participle, in different voices),
* _պատասխաներ_/_patasxaner_ “(do, does, did not) answer”, _փոխուիր_/_pʼoxowir_ “(do, does, did not) change”, _գար_/_gar_ “(do, does, did not) come”

<!-- Interlanguage links updated Út 30. června 2026, 10:59:23 CEST -->

---
layout: postag
title: 'AUX_'
shortdef: 'auxiliary verb'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
udver: '2'
---

### Definition
The auxiliary verb accompanies the lexical verb of a verb phrase and expresses grammatical distinctions not carried by the lexical verb.
Western Armenian has the following auxiliary verbs: _եմ_/_em_ “be”, _լինիմ (ըլլալ)_/_linim (ěllal)_ “be repeatedly / habitually”,  _պիտի_/_bidi_ or _պէտք է_/_bēdkʿ ē_ “must/will”, _կը (կու, կ', կ-)/gě (gu, g'-, g-)_ “do”,  _կոր_/_gor_, _ունիմ_/_unim_ “have”, _կամ_/_kam_ “exist”, _տալ_/_dal_ “cause / make someone perform action”.

The most commonly used auxiliary is _եմ/em_ with its conjugation paradigms in present and imperfect.

Auxiliaries can be divided into:
- tense auxiliaries, used to form compound tenses represented by _եմ/em_ and _էի/ēi_ “be”;
- aspectual auxiliaries, used to form so-called “secondary compound tenses” represented by _լինիմ (ըլլալ)_/_linim (ěllal)_, _կամ_/_gam_, _ունիմ_/_unim_ “be repeatedly/habitually”, and _կոր_/_gor_ (occurs after the indicative form consisting of _կը_ and a finite (subjunctive) verb and marks progressive aspect, indicating that the situation is ongoing at the reference time);
- mood auxiliary, used to form periphrastic indicative mood by _կու (կոյ, կ-)/kow (koy, k-)_ “do”, _պիտի/piti_ “to be necessary, useful”;
- voice auxiliary, used to form periphrastic causative represented by _տալ_/_dal_ “cause / make someone perform action”.

### Examples

- Present tense. Finite present form of _եմ_/_em_ is combined with the future, resultative and perfect participles of the lexical verb. The auxiliary expresses aspect, person, number, mood and tense, participles express aspect and voice:
  * _**մնալու ենք**_/_**mnalu enkʿ**_ “We will stay”
  *  _ժամանակները **փոխուած են**_/_zhamanagnerě **pʿokhuadz en**_ “Times **have changed**”,
  * _**առաջարկեր է**_/_**aṛacharger ē**_ “lit: **has proposed**”
  
  Note that a limited set of verbs can form present morphologically, without the auxiliary.

- Imperfect tense. Finite imperfect form _էի_/_ēi_ is combined with the  future, resultative and perfect participles of the lexical verb. The auxiliary expresses aspect, person, number, mood and tense, participles express aspect and voice:
  * _անապատներէ **անցնելու էիք**_/_anabadnerē **antsʿnelu ēikʿ**_ “**you were going to cross** deserts”
  * _**որոշած էի**_/_**oroshadz ēi**_ “**I had decided**”
  * _**վարժուեր էինք** իր ներկայութեան_/_varzhuer ēinkʿ ir nergayutʿean_ “we **had grown accustomed** to his/her presence”.
 

- Durative / habitual aspect. The finite form of _լինիմ/linim_ “be repeatedly / habitually”_, _ունիմ/ownim_ “have”, _կամ/kam_ “exist”  (in various tenses and moods) are combined with resultative, perfect and past participles of the lexical verb. The auxiliary expresses aspect, person, number, mood and tense, participles express aspect and voice:
   * _իւր բնակութիւնն հանապազ ի կաղնի ծառն **լինի**_/_iwr bnakowt’iwnn hanapaz i kaġni çaṙn **lini**_ “its dwelling **is** always in the oak tree”,
   * _եղկ ջուր, յոր **եփած լինի** չոր մանուշակն եւ վարդ_/_eġk ǰowr, yor **ep’aç lini** čor manowšakn ew vard_ “Lukewarm water, in which dried violet and rose **have been boiled**”,
   * _Եւ թէ որդիքն **մեռել լինին** թագաւորին_/_Ew t’ē ordik’n **meṙel linin** t’agaworin_ “And if the king's sons **have died**”,
   * _զքաղաքն **առած ունէին**_/_zk’aġak’n **aṙaç ownēin**_ “They **had captured** the city”,
   * _Ոմանք չեն արժանի ի յիւր տեսոյն, **կան հալածել**_/_Omank’ čen aržani i yiwr tesoyn, **kan halaçel**_ “Some are not worthy of his sight; they **keep persecuting**”.

 
- Indicative / conditional mood. The mood particle _կու (կոյ, կ-)/kow (koy, k-)_ “do/will” is combined with the older present and imperfect forms (present/imperfect subjunctive) of lexical verb to form the present/imperfect indicative or the present/imperfect conditional, which share the same form.
   * _Քաղցր խօսքով **կու ծիծաղիս**_/_K’aġc’r xòsk’ov **kow çiçaġis**_ “With sweet speech, you **smile** / you **are smiling** / you **will smile**”,
   * _**կ**խմէր_/_**k**xmēr_ “He **used to drink** / He **was drinking** / he **would drink**”,
   * _**տի** բերէր_/_**ti** berēr_ “he **was going to** bring / he **should have** brought”.

  
- Necessitative mood. The mood particle _**պիտի**_ “to be necessary, useful” is combined with subjunctive finite form of lexical verb. The auxiliary expresses mood.
  * _Զիմ գըլուխս ու զարիւնըս վարձ **պիտի տամ**_/_Zim gëlowxs ow zariwnës varj **piti** tam_ “I **must** give my head and my blood as the price”,
  * _գիշերս ինչ **տի** լինայ_/_gišers inč **ti** linay_ “What **will** happen tonight?”
  * _**տի** բերէր_/_**ti** berēr_ “he/she **was going to** bring / he **should** bring”.

Note, that in Middle Armenian copulas are also tagged `AUX` and the definition of copula sentences has been extended to location-existentials (_իւր բնակութիւնն հանապազ ի կաղնի ծառն **լինի**_/_iwr bnakowt’iwnn hanapaz i kaġni çaṙn **lini**_ “Its dwelling **is** always in the oak tree.”) Hence almost all occurrences of _եմ_ and _լինիմ_ should be tagged `AUX`. Only pure existentials without location have a non-auxiliary _լինիմ_ and _կամ_ which should be tagged `VERB`.
 * _քո մազերդ **է ճիւղք** խաղողի_/_k’o mazerd **ē č̣iwġk’** xaġoġi_ “Your hair **is** like grape-vine **tendrils** `AUX`”,
 * _Պագն որ **դրամով լինի**, չեմ իտար_/_Pagn or **dramov lini**, čem itar_ “A kiss that **is for money**, I shall not give `AUX`”,
 * _Յորժամ յարութիւն **լինի**, փողն երկու ձայնիւ տի գոչէ_/_Yoržam yarowt’iwn **lini**, p’oġn erkow jayniw ti gočē_ “When the resurrection occurs, the trumpet shall cry out with two voices `VERB`”.


- Causative voice. The finite form of _տալ&nbsp;_ (in various tenses and moods) is combined with infinitive of the content verb. The auxiliary expresses aspect, person, number, tense and mood. The auxiliary will have `Voice=Cau`. There will also be voice information at the infinitive:
  * _զամէնն հնազանդութեամբ բերէ եւ **չտայ** `Cau` **սպաննել**_ `Act`/_amēnn hnazandowt’eamb berē ew **čtay spannel**_ “lit: he will bring them all into submission and **will not make kill** them”.
    
 
- Negative auxiliaries. Particle-like morphemes _չի (չ-)/či (č-)_ “do/does not” and _ոչ/oč_ “do/does not” do not have a conjugation paradigm and are used to negate verbs in the present and imperfect tenses of the indicative and subjunctive moods.
  * _Յեկեղեցին **ոչ երեւայ**. Եւ զեկեալ հիւրսն **ոչ խղճայ**_/_Yekeġec’in **oč ereway**. Ew zekeal hiwrsn **oč xġč̣ay**_ “The church **does not appear**; and he **does not pity** the guests who have come”,
  * _**Չի դառնաս** հեղ մի յիս հայես. **Չի գիտե՞ս** քո պլպուլն եմ ես_/_**Či daṙnas** heġ mi yis hayes. **Či gites** k’o plpowln em es?_ “You do not turn to look at me even once; Don't you know that I am your nightingale?”
  * _Եւ այս ցեղս զստածումն եւ զբժշկութիւնն **չընդունի** բնաւ_/_Ew ays c’eġs zstaçowmn ew zbžškowt’iwnn čëndowni bnaw_ “And this type (of ailment) does not admit any treatment or cure at all”.
 
 ### Constructions with _կամ_ and _ունիմ_ and resultative participle

Note, that finite form of existentials _կամ_ “be, exist” and _ունեմ_ “have” in combination with resultative participle (_Նա հագած <b>ուներ</b> թեթև վերարկու։_ “He <b>had</b> a light coat dressed.” or _Երեկվանից ոչ մի տող գրած <b>չկամ</b>։_ “I <b>haven't written</b> a single line since yesterday.” (lit: “I <b>do not exist</b> written not any line since yesterday.”) are tagged `AUX` (these so-called “experiential forms”, mainly in negative or interrogative constructions, are analyzed as auxiliary in the Armenian grammar).
  <!-- Interlanguage links updated St 6. května 2026, 20:41:55 CEST -->

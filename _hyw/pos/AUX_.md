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
Western Armenian has the following auxiliary verbs: _եմ_/_em_ “be”, _ըլլամ_/_ëllam_  (_ըլլալ_/_ěllal_) “be repeatedly / habitually”,  _պիտի_/_piti_ or _պետք է_/_petkʿ ē_ “must/will”, _կը (կու, կ', կ-)/kë (kow, k', k-)_ “do”,  _կոր_/_kor_, _ունիմ_/_ownim_ “have”, _կամ_/_kam_ “exist”, _տալ_/_tal_ “cause / make someone perform action”.

The most commonly used auxiliary is _եմ/em_ with its conjugation paradigms in present and imperfect.

Auxiliaries can be divided into:
- tense auxiliaries, used to form compound tenses represented by _եմ/em_ and _էի/ēi_ “be”;
- aspectual auxiliaries, used to form so-called “secondary compound tenses” represented by _ըլլամ_/_ëllam_, _կամ_/_kam_, _ունիմ_/_ownim_ “be repeatedly/habitually”, and _կոր_/_kor_ (occurs after the indicative form consisting of _կը_/_kë_ and a finite (subjunctive) verb and marks progressive aspect, indicating that the situation is ongoing at the reference time);
- mood auxiliaries, used to form periphrastic indicative mood by _կը (կու, կ', կ-)/kë (kow, k', k-)_ “do”, and _պիտի/piti_ “to be necessary, useful”;
- voice auxiliary, used to form periphrastic causative represented by _տալ_/_tal_ “cause / make someone perform action”.

### Examples

- Present tense. Finite present form of _եմ_/_em_ is combined with the future, resultative and perfect participles of the lexical verb. The auxiliary expresses aspect, person, number, mood and tense, participles express aspect and voice:
  * _<b>մնալու ենք</b>_/_<b>mnalu enkʿ</b>_ “we <b>will stay</b>”
  *  _ժամանակները <b>փոխուած են</b>_/_zhamanagnerě <b>pʿokhuadz en</b>_ “times <b>have changed<b>”,
  * _<b>առաջարկեր է</b>_/_<b>aṛacharger ē</b>_ “he/she <b>has proposed</b>”
  
  Note that a limited set of verbs can form present morphologically, without the auxiliary.

- Imperfect tense. Finite imperfect form of _էի_/_ēi_ is combined with the future, resultative and perfect participles of the lexical verb. The auxiliary expresses aspect, person, number, mood and tense, participles express aspect and voice:
  * _անապատներէ <b>անցնելու էիք</b>_/_anabadnerē <b>antsʿnelu ēikʿ</b>_ “<b>you were going to cross</b> deserts”
  * _<b>որոշած էի</b>_/_<b>oroshadz ēi</b>_ “I <b>had decided</b>”
  * _<b>վարժուեր էինք</b> իր ներկայութեան_/_<b>varzhuer ēinkʿ</b> ir nergayutʿean_ “we <b>had grown accustomed</b> to his/her presence”.
 

- Durative / habitual aspect. The finite form of _ըլլամ_/_ëllam_ “be repeatedly / habitually”_, _ունիմ/ownim_ “have”, _կամ/kam_ “exist”  (in various tenses and moods) are combined with resultative, perfect and past participles of the lexical verb. The auxiliary expresses aspect, person, number, mood and tense, participles express aspect and voice:
   * _շահագրգռուած <b>ըլլան</b>_/_šahagrgṙowaç <b>ëllan</b>_ “(so that) they <b>are</b> interested”,
   * _եթէ խօսելու <b>ըլլայ</b>_/_et’ē xòselow <b>ëllay</b>_ “If he/she were to speak”,
   * _եռագոյնը պարզուած կ՚ըլլայ_/_eṙagoynë parzowaç k՚ëllay_ "the tricolor (flag) will have been unfurled"
  
 
- Indicative / conditional mood. The mood particle _կու (կոյ, կ-)/kow (koy, k-)_ “do/will” is combined with the older present and imperfect forms (present/imperfect subjunctive) of lexical verb to form the present/imperfect indicative or the present/imperfect conditional, which share the same form.
   * _Քաղցր խօսքով **կու ծիծաղիս**_/_K’aġc’r xòsk’ov **kow çiçaġis**_ “With sweet speech, you **smile** / you **are smiling** / you **will smile**”,
   * _**կ**խմէր_/_**k**xmēr_ “He **used to drink** / He **was drinking** / he **would drink**”,
   * _**տի** բերէր_/_**ti** berēr_ “he **was going to** bring / he **should have** brought”.

  
Since there is no generally accepted approach in Armenian grammar to the analysis of finite forms of the verb _լինել_/_linel_ “be” as either auxiliary or lexical verbs, the Armenian UD treebank adopts the following principle. The forms _եղավ_/_eġav_ "was", _լինի_/_lini_ "if-it-is", _լիներ_/_liner_ "if-it-was", _կլինի_/_klini_ "will-be", and _կլիներ_/_kliner_ "would-be" are analyzed as lexical verbs whenever they occur with nominal predicates, and as auxiliaries only when they combine with participles.
In compound forms consisting of _եմ_/_em_ and _լինել_/_linel_ used with nominal predicates, both components are analyzed as auxiliaries: _եմ_ receives the relation `cop`, while _լինել_ receives the relation  `aux`.
Note that in Armenian copulas are also tagged `AUX` and the definition of copula sentences has been extended to location-existentials (_Նա տանն <b>է</b> / Նա տանն <b>է լինում</b>_/_Na tann <b>ē</b> / Na tann <b>ē linowm</b>_ “He <b>is</b> at home.”) Hence almost all occurrences of _եմ_/_em_ and _լինել (լինեմ)_/_linel (linem)_ should be now tagged `AUX`.
Only pure existentials without location (_Այն <b>եղել</b> է ու <b>կա</b> որպես հուշ։_/_Ayn <b>eġel</b> ē ow <b>ka</b> orpes howš_ “It <b>has been</b> and <b>is</b> as a memory.”) have a non-auxiliary _լինել_/_linel_ and _կամ_/_kam_ which should be tagged `VERB`.

Note, that in Western Armenian copulas are also tagged `AUX` and the definition of copula sentences has been extended to location-existentials (_իւր բնակութիւնն հանապազ ի կաղնի ծառն **լինի**_/_iwr bnakowt’iwnn hanapaz i kaġni çaṙn **lini**_ “Its dwelling **is** always in the oak tree.”) Hence almost all occurrences of _եմ_ and _լինիմ_ should be tagged `AUX`. Only pure existentials without location have a non-auxiliary _լինիմ_ and _կամ_ which should be tagged `VERB`.
 * _Կարծես գրականութիւնը <b>ըլլար</b> գիտութեան առարկայ_/_k’o mazerd **ē č̣iwġk’** xaġoġi_ “Your hair **is** like grape-vine **tendrils** `AUX`”,
 * _Պագն որ **դրամով լինի**, չեմ իտար_/_Pagn or **dramov lini**, čem itar_ “A kiss that **is for money**, I shall not give `AUX`”,
 * _Յորժամ յարութիւն **լինի**, փողն երկու ձայնիւ տի գոչէ_/_Yoržam yarowt’iwn **lini**, p’oġn erkow jayniw ti gočē_ “When the resurrection occurs, the trumpet shall cry out with two voices `VERB`”.


~~~ conllu
#
 1	Որովհետեւ	որովհետեւ	SCONJ	_	_	4	mark	_	Translit=Orovhetew|LTranslit=orovhetew
2	բաւականին	բաւականին	ADV	_	_	3	advmod	_	Translit=bawakanin|LTranslit=bawakanin
3	արագ	արագ	ADV	_	Degree=Pos	4	advmod	_	Translit=arag|LTranslit=arag
4	եղած	ըլլալ	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	Translit=eġaç|LTranslit=ëllal
5	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	aux	_	Translit=ē|LTranslit=em
~~~

~~~ conllu
#
23	ինչ	ինչ	DET	_	PronType=Int	24	det	_	Translit=inč|LTranslit=inč
24	վիճակի	վիճակ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	18	conj	_	Translit=vič̣aki|LTranslit=vič̣ak
25	եղած	ըլլալ	AUX	_	Aspect=Perf|Polarity=Pos|VerbForm=Part	24	aux	_	Translit=eġaç|LTranslit=ëllal
26	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	24	cop	_	Translit=ē|LTranslit=em
27	Մարիամը	Մարիամ	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Giv|Number=Sing	24	nsubj	_	Translit=Mariamë|LTranslit=Mariam|SpaceAfter=No
28	,	,	PUNCT	_	_	30	punct	_	Translit=,|LTranslit=,
29	որքան	որքան	ADV	_	PronType=Int	30	advmod	_	Translit=ork’an|LTranslit=ork’an
30	յոգնած	յոգնիլ	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	18	conj	_	Translit=yognaç|LTranslit=yognil
31	եղած	ըլլալ	AUX	_	Aspect=Perf|Polarity=Pos|VerbForm=Part	30	aux	_	Translit=eġaç|LTranslit=ëllal
32	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	30	aux	_	Translit=ē|LTranslit=em|SpaceAfter=No
33	։	։	PUNCT	_	_	15	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
#
16	յօրինած	յօրինել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	7	parataxis	_	Translit=yòrinaç|LTranslit=yòrinel
17	ըլլալու	ըլլալ	AUX	_	Aspect=Prosp|VerbForm=Part	16	aux	_	Translit=ëllalow|LTranslit=ëllal
18	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	16	aux	_	Translit=en|LTranslit=em
~~~


- Causative voice. The finite form of _տալ&nbsp;_ (in various tenses and moods) is combined with infinitive of the content verb. The auxiliary expresses aspect, person, number, tense and mood. The auxiliary will have `Voice=Cau`. There will also be voice information at the infinitive:
  * _զամէնն հնազանդութեամբ բերէ եւ **չտայ** `Cau` **սպաննել**_ `Act`/_amēnn hnazandowt’eamb berē ew **čtay spannel**_ “lit: he will bring them all into submission and **will not make kill** them”.
    
 
- Negative auxiliaries. Particle-like morphemes _չի (չ-)/či (č-)_ “do/does not” and _ոչ/oč_ “do/does not” do not have a conjugation paradigm and are used to negate verbs in the present and imperfect tenses of the indicative and subjunctive moods.
  * _Յեկեղեցին **ոչ երեւայ**. Եւ զեկեալ հիւրսն **ոչ խղճայ**_/_Yekeġec’in **oč ereway**. Ew zekeal hiwrsn **oč xġč̣ay**_ “The church **does not appear**; and he **does not pity** the guests who have come”,
  * _**Չի դառնաս** հեղ մի յիս հայես. **Չի գիտե՞ս** քո պլպուլն եմ ես_/_**Či daṙnas** heġ mi yis hayes. **Či gites** k’o plpowln em es?_ “You do not turn to look at me even once; Don't you know that I am your nightingale?”
  * _Եւ այս ցեղս զստածումն եւ զբժշկութիւնն **չընդունի** բնաւ_/_Ew ays c’eġs zstaçowmn ew zbžškowt’iwnn čëndowni bnaw_ “And this type (of ailment) does not admit any treatment or cure at all”.
 
 ### Constructions with _կամ_ and _ունիմ_ and resultative participle

Note, that finite form of existentials _կամ_ “be, exist” and _ունեմ_ “have” in combination with resultative participle (_Նա հագած <b>ուներ</b> թեթև վերարկու։_ “He <b>had</b> a light coat dressed.” or _Երեկվանից ոչ մի տող գրած <b>չկամ</b>։_ “I <b>haven't written</b> a single line since yesterday.” (lit: “I <b>do not exist</b> written not any line since yesterday.”) are tagged `AUX` (these so-called “experiential forms”, mainly in negative or interrogative constructions, are analyzed as auxiliary in the Armenian grammar).
  <!-- Interlanguage links updated St 6. května 2026, 20:41:55 CEST -->

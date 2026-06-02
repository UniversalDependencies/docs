---
layout: feature
title: 'Voice'
shortdef: 'voice'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Act">Act</a></td>
  <td><a href="#Cau">Cau</a></td>
  <td><a href="#Mid">Mid</a></td>
  <td><a href="#Pass">Pass</a></td>
  <td><a href="#Rcp">Rcp</a></td>
</tr>
</table>

Voice is a feature of verbs that helps to map the traditional syntactic functions,
such as subject and object, to semantic roles, such as agent and patient. See also the related feature [subcategorization](Subcat).

### <a name="Act">`Act`</a>: active voice

Prototypically, the subject of the verb is the doer of the action (agent), the object is affected by the action (patient).

By default, the finite and non-finite forms of verbs are labeled `Voice=Act`, except for the cases when they are labeled `Voice=Pass`, `Voice=Mid` or `Voice=Cau` (see below).

#### Examples

~~~ conllu
1	Ես	ես	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	Translit=Es|LTranslit=es
2	ջարդում	ջարդել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=ǰardowm|LTranslit=ǰardel
3	եմ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	aux	_	Translit=em|LTranslit=em
4	նրա	նրա	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Prs	5	det:poss	_	Translit=nra|LTranslit=nra
5	օղիները	օղի	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	2	obj	_	Translit=òġinerë|LTranslit=òġi|SpaceAfter=No
~~~

~~~ conllu
1	Պատմվածքներից	պատմվածք	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Plur	2	nmod:npmod	_	Translit=Patmvaçk’neric’|LTranslit=patmvaçk’
2	մեկի	մեկը	PRON	_	Case=Gen|PronType=Ind	3	nmod:poss	_	Translit=meki|LTranslit=mekë
3	հերոսուհին	հերոսուհի	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	7	nsubj	_	Translit=herosowhin|LTranslit=herosowhi
4	«	«	PUNCT	_	_	7	punct	_	Translit=«|LTranslit=«|SpaceAfter=No
5	մեծ	մեծ	ADJ	_	Degree=Pos	6	amod	_	Translit=meç|LTranslit=meç
6	քաղաքներում	քաղաք	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Plur	7	obl	_	Translit=k’aġak’nerowm|LTranslit=k’aġak’
7	կորցնում	կորցնել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=korc’nowm|LTranslit=korc’nel
8	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	aux	_	Translit=ē|LTranslit=em
9	վախերը	վախ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	7	obj	_	Translit=vaxerë|LTranslit=vax|SpaceAfter=No
10	»	»	PUNCT	_	_	7	punct	_	Translit=»|LTranslit=»|SpaceAfter=No
11	:	:	PUNCT	_	Foreign=Yes	7	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
1	քարի	քար	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	3	obl	_	Translit=k’ari|LTranslit=k’ar
2	վրա	վրա	ADP	_	AdpType=Post	1	case	_	Translit=vra|LTranslit=vra
3	հանգցրեց	հանգցնել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=hangc’rec’|LTranslit=hangc’nel
4	բիչոկները	բիչոկ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur|Style=Coll	3	obj	_	Translit=bičoknerë|LTranslit=bičok|SpaceAfter=No
~~~


### <a name="Pass">`Pass`</a>: passive voice

The subject of the verb is affected by the action (patient). The doer (agent) is either a non-obligatory oblique phrase of the verb or not overtly expressed.

The finite and non-finite forms of verbs are labeled `Voice=Pass` in the passive constructions. In this case, the verbs are marked with passive infixe _-վ-_/_-v-_ (for exceptions see below).

#### Examples

* _Առաջարկությունը <b>մերժվեց</b> (մասնակիցների կողմից)_/_Aṙaǰarkowt’yownë <b>meržvec’</b> (masnakic’neri koġmic’)_ “The suggestion <b>was denied</b> (by the participants)”,
* _Նա <b>արհամարվում</b> է ժողովրդից_/_Na <b>arhamarvowm</b> ē žoġovrdic’_ “He is <b>despised</b> by the people”,
* _Անտառը <b>ծածկված</b> է ձյունով_/_Antaṙë <b>çaçkvaç</b> ē jyownov_ “The forest is <b>covered</b> with snow”.

### <a name="Mid">`Mid`</a>: middle voice

Between active and passive. Needed also for the reflexive, traditionally called mediopassive (for reciprocal verbs see below); in this case, the verbs and their lemmas are marked with passiv infix _-վ-_/_-v-_. 

Note, that there is a not large set of middle voice verbs marked with passive infix _-վ-_ (so-called passivizied middle verbs). These forms are morphologically very close to the passive, do not have morphologically related non-marked counterparts and are tagged `Voice=Mid`. If there is a morphologically related non-marked counterpart, than the two verbs are represented by different lemmas (e.g. _վերաբերվել_.`Mid` “treat, be about”, but _վերաբերել&nbsp;_.`Act` “refer to”).

#### Examples

~~~ conllu
1	Վախենում	վախենալ	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	Translit=Vaxenowm|LTranslit=vaxenal
2	ենք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	aux	_	Translit=enk’|LTranslit=em
3	ապրելուց	ապրել	VERB	_	Case=Abl|Definite=Ind|Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	1	obl	_	Translit=aprelowc’|LTranslit=aprel|SpaceAfter=No
4	:	:	PUNCT	_	Foreign=Yes	1	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
1	Ոտքերով	ոտք	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Plur	4	obl	_	Translit=Otk’erov|LTranslit=otk’
2	մի	մի	DET	_	ExtPos=ADV|PronType=Art	4	advmod	_	Translit=mi|LTranslit=mi
3	կերպ	կերպ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	2	fixed	_	Translit=kerp|LTranslit=kerp
4	հրեց	հրել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=hrec’|LTranslit=hrel
5	խոտերին	խոտ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Plur	4	obl	_	Translit=xoterin|LTranslit=xot|SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	Translit=,|LTranslit=,
7	լուռ	լուռ	ADJ	_	Degree=Pos	8	advcl	_	Translit=lowṙ|LTranslit=lowṙ
8	հագնվեց	հագնվել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	4	conj	_	Translit=hagnvec’|LTranslit=hagnvel|SpaceAfter=No
9	։	։	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
1	Ես	ես	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	Translit=Es|LTranslit=es
2	խելառի	խելառ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing|Style=Vrnc	4	obl	_	Translit=xelaṙi|LTranslit=xelaṙ
3	պես	պես	ADP	_	AdpType=Post	2	case	_	Translit=pes|LTranslit=pes
4	հարձակվում	հարձակվել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	Translit=harjakvowm|LTranslit=harjakvel
5	եմ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	aux	_	Translit=em|LTranslit=em
6	շշերի	շիշ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	4	obl	_	Translit=ššeri|LTranslit=šiš
7	վրա	վրա	ADP	_	AdpType=Post	6	case	_	Translit=vra|LTranslit=vra|SpaceAfter=No
~~~

~~~ conllu
1	Հիրավի	հիրավի	PART	_	_	5	discourse	_	Translit=Hiravi|LTranslit=hiravi|SpaceAfter=No
2	,	,	PUNCT	_	_	5	punct	_	Translit=,|LTranslit=,
3	աշխատանքը	աշխատանք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	5	nsubj	_	Translit=ašxatank’ë|LTranslit=ašxatank’
4	մարդուն	մարդ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	5	iobj	_	Translit=mardown|LTranslit=mard
5	օգնում	օգնել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	Translit=ògnowm|LTranslit=ògnel
6	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	aux	_	Translit=ē|LTranslit=em
7	հաշտվել	հաշտվել	VERB	_	Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	5	xcomp	_	Translit=haštvel|LTranslit=haštvel
8	սուրացող	սուրալ	VERB	_	Aspect=Dur|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	9	acl	_	Translit=sowrac’oġ|LTranslit=sowral
9	ժամանակի	ժամանակ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	7	obl	_	Translit=žamanaki|LTranslit=žamanak
10	հետ	հետ	ADP	_	AdpType=Post	9	case	_	Translit=het|LTranslit=het
~~~
  
### <a name="Cau">`Cau`</a>: causative voice

Note, that in Armenian this is a feature of verbs. In causative constructions the subject is the entity “causing” the action. It is generally translated into English as ‘cause/make/have/let/allow’ someone to perform action described by the main verb. 

The causative is expressed by the infix _-ցն-_. It is quite productive and can be used also for transitivisation of intransitive (middle voice) verbs. They will have `Voice=Act`, not `Voice=Cau` (e.g. _<b>կորցնել, հանգցնել</b>_).

Note, that the auxiliary _տալ_ (in various tenses and moods) is accombined with infinitve of the content verb to construct the causative voice. Only the auxiliary will have `Voice=Cau`. There will be also voice information at the infinitive.

#### Examples

* _Մայրը <b>քնեցրեց</b>_`Act` _որդուն&nbsp;_ “The mather <b>put</b> her son to sleep”,
* _<b>Սովորեցնում</b>_ `Cau` _էր նրան լեզու&nbsp;_ “He <b>tought</b> her a foreign language”,
* _Այդ բոլորը պատերազմ էր <b>հիշեցնում</b>_ `Cau` _նրան&nbsp;_ “All these things <b>reminded</b> him a war”,
* _Ո՞ր քամին <b>հանգցրեց</b>_ `Act` _նրանց սերը&nbsp;_ “Which wind <b>extinguished</b>.`Cau` their love (lit: made the love to extinguish)”,
* _վազել_.`Mid` _<b>տալ</b>_.`Cau` “to <b>make</b> somebody run”,
* _<b>վազեցնել</b>_.`Cau` _<b>տալ</b>_.`Cau` “lit: to <b>make</b> someone <b>make</b> someone run”,
* _հասկանալ_.`Act` _<b>տալ</b>&nbsp;_.`Cau` “lit: to <b>make</b> somebody understand”,
* _<b>հասկացնել</b>&nbsp;_.`Cau` “lit: to <b>make</b> somebody understand”,
* _<b>հասկացնել</b>_.`Cau` _<b>տալ</b>&nbsp;_.`Cau` “lit: to <b>make</b> someone <b>make</b> someone understand”.

### <a name="Rcp">`Rcp`</a>: reciprocal voice

A reciprocal verb describes an event in which two agents (or groups of agents) perform the same action upon each other.

The reciprocal is expressed by the passiv infix _-վ-_ however, the verb roots that can become reciprocal is limited.

#### Examples

* _Նրանք <b>գրկախառնվեցին</b>&nbsp;_ “They hugged each other”.
<!-- Interlanguage links updated St 6. května 2026, 20:44:35 CEST -->

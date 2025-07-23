---
layout: relation
title: 'advcl:pred'
shortdef: 'optional depictive'
udver: '2'
---

Beginning with release 2.17, optional depictives (secondary predication) are annotated with the dedicated relation
subtype `advcl:pred` instead of plain `advcl`. The current implementation assumes that all instances of the `Atv`
relation (verbal attribute) in PADT will be converted to `advcl:pred`, although some of them may need the [xcomp]()
relation instead.

~~~ conllu
# newpar id = afp.20000715.0001:p4
# sent_id = afp.20000715.0001:p4u1
# text = وبدا ستيفن كنت نحيلا جدا، الا انه اغتسل وحلق ذقنه للمرة الاولى منذ فترة لا بد ان تكون طويلة.
# orig_file_sentence AFP_ARB_20000715.0001#4
1-2	وبدا	_	_	_	_	_	_	_	_
1	و	وَ	CCONJ	C---------	_	0	root	_	Gloss=and|LTranslit=wa|Translit=wa|Vform=وَ
2	بدا	بَدَا	VERB	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	1	parataxis	_	Gloss=appear,seem|LTranslit=badā|Translit=badā|Vform=بَدَا
3	ستيفن	ستِيفِن	X	X---------	Foreign=Yes	2	nsubj	_	Vform=ستِيفِن|Gloss=Stephen,Stefan|Translit=stīfin|LTranslit=stīfin
4	كنت	كِنت	X	X---------	Foreign=Yes	3	flat	_	Vform=كِنت|Gloss=Kent|Translit=kint|LTranslit=kint
5	نحيلا	نَحِيل	ADJ	A-----MS4I	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	2	advcl:pred	_	Vform=نَحِيلًا|Gloss=slender,slim,narrow,weak,emaciated|Translit=naḥīlan|LTranslit=naḥīl
6	جدا	جِدّ	NOUN	N------S4I	Case=Acc|Definite=Ind|Number=Sing	5	nmod	_	SpaceAfter=No|Vform=جِدًّا|Gloss=seriousness,earnestness|Translit=ǧiddan|LTranslit=ǧidd
7	،	،	PUNCT	G---------	_	6	punct	_	Vform=،|Translit=,
8	الا	إِلَّا	PART	F---------	_	11	cc	_	Vform=إِلَّا|Gloss=however,except|Translit=ʾillā|LTranslit=ʾillā
9-10	انه	_	_	_	_	_	_	_	_
9	أن	أَنَّ	SCONJ	C---------	_	11	cc	_	Gloss=that|LTranslit=ʾanna|Translit=ʾanna|Vform=أَنَّ
10	ه	هُوَ	PRON	SP---3MS4-	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	Gloss=he,she,it|LTranslit=huwa|Translit=hu|Vform=هُ
11	اغتسل	اِغتَسَل	VERB	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	2	conj	_	Vform=اِغتَسَلَ|Gloss=wash,bathe|Translit=iġtasala|LTranslit=iġtasal
12-13	وحلق	_	_	_	_	_	_	_	_
12	و	وَ	CCONJ	C---------	_	13	cc	_	Gloss=and|LTranslit=wa|Translit=wa|Vform=وَ
13	حلق	حَلَق	VERB	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	11	conj	_	Gloss=shave|LTranslit=ḥalaq|Translit=ḥalaqa|Vform=حَلَقَ
14-15	ذقنه	_	_	_	_	_	_	_	_
14	ذقن	ذَقن	NOUN	N------S4R	Case=Acc|Definite=Cons|Number=Sing	13	obj	_	Gloss=chin,beard|LTranslit=ḏaqn|Translit=ḏaqna|Vform=ذَقنَ
15	ه	هُوَ	PRON	SP---3MS2-	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	14	nmod	_	Gloss=he,she,it|LTranslit=huwa|Translit=hu|Vform=هُ
16-17	للمرة	_	_	_	_	_	_	_	_
16	ل	لِ	ADP	P---------	AdpType=Prep	17	case	_	Gloss=for,to|LTranslit=li|Translit=li|Vform=لِ
17	المرة	مَرَّة	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	13	obl	_	Gloss=once,one_time|LTranslit=marrat|Translit=al-marrati|Vform=اَلمَرَّةِ
18	الاولى	أَوَّل	ADJ	A-----FS2D	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	17	amod	_	Vform=اَلأُولَى|Gloss=first,foremost,early|Translit=al-ʾūlā|LTranslit=ʾawwal
19	منذ	مُنذُ	ADP	P---------	AdpType=Prep	20	case	_	Vform=مُنذُ|Gloss=since,for,ago|Translit=munḏu|LTranslit=munḏu
20	فترة	فَترَة	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	17	nmod	_	Vform=فَترَةٍ|Gloss=phase,time_period,interval|Translit=fatratin|LTranslit=fatrat
21	لا	لَا	PART	F---------	_	20	nmod	_	Vform=لَا|Gloss=no,not|Translit=lā|LTranslit=lā
22	بد	بُدّ	NOUN	N------S4R	Case=Acc|Definite=Cons|Number=Sing	21	nsubj	_	Vform=بُدَّ|Gloss=escape,avoiding|Translit=budda|LTranslit=budd
23	ان	أَن	SCONJ	C---------	_	24	mark	_	Vform=أَن|Gloss=to|Translit=ʾan|LTranslit=ʾan
24	تكون	كَان	VERB	VISA-3FS--	Aspect=Imp|Gender=Fem|Mood=Sub|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	22	ccomp	_	Vform=تَكُونَ|Gloss=be,is,exist|Translit=takūna|LTranslit=kān
25	طويلة	طَوِيل	ADJ	A-----FS4I	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	24	advcl:pred	_	SpaceAfter=No|Vform=طَوِيلَةً|Gloss=tall,long,lengthy,extensive|Translit=ṭawīlatan|LTranslit=ṭawīl
26	.	.	PUNCT	G---------	_	1	punct	_	Vform=.|Translit=.

~~~

<!-- Interlanguage links updated So 10. května 2025, 18:14:50 CEST -->

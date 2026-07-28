---
layout: base
title:  'Statistics of csubj in UD_Old_Georgian-GLC'
udver: '2'
---

## Treebank Statistics: UD_Old_Georgian-GLC: Relations: `csubj`

This relation is universal.

7 nodes (0%) are attached to their parents as `csubj`.

6 instances of `csubj` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.85714285714286.

The following 3 pairs of parts of speech are connected with `csubj`: <tt><a href="oge_glc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="oge_glc-pos-VERB.html">VERB</a></tt> (4; 57% instances), <tt><a href="oge_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_glc-pos-VERB.html">VERB</a></tt> (2; 29% instances), <tt><a href="oge_glc-pos-ADV.html">ADV</a></tt>-<tt><a href="oge_glc-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 csubj	color:blue
1	ხოლო	ხოლო	CCONJ	Conj	_	6	cc	_	Translit=xolo
2	მოუწოდეს	მოწოდება	VERB	Verb	Aspect=Perf|Mood=Ind|Number[io]=Plur|Number[subj]=Plur|Person[io]=3|Person[subj]=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=moucodes
3	ათორმეტთა	ათორმეტი	NUM	Num	Case=Dat|Number=Plur|NumType=Card	2	iobj	_	Translit=atʻormettʻa
4	მათ	იგი	PRON	Pron	Case=Dat|Number=Plur|PronType=Dem	5	det	_	Translit=matʻ
5	სიმრავლესა	სიმრავლე	NOUN	Noun	Case=Dat|Number=Sing	2	obj	_	Translit=simravlesa
6	მოწაფეთასა	მოწაფე	NOUN	Noun	Case=Dat|Case[stack]=Gen|Number=Plur	5	nmod	_	Translit=mocapʻetʻasa
7	და	და	CCONJ	Conj	_	8	cc	_	Translit=da
8	ჰრქუეს	რქმა	VERB	Verb	Aspect=Perf|Mood=Ind|Number[io]=Plur|Number[subj]=Plur|Person[io]=3|Person[subj]=3|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	SpaceAfter=No|Translit=hrkʻues
9	:	:	PUNCT	F	PunctType=Colo	8	punct	_	Translit=:
10	არა	არა	PART	Part	PartType=Neg	11	advmod:neg	_	Translit=ara
11	სათნო	სათნო	ADJ	Adj	Case=Nom|Degree=Pos|Number=Sing	8	ccomp	_	Translit=satʻno
12	არს	ყოფა	AUX	Verb	Aspect=Imp|Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	Translit=ars
13	ჩუენდა	ჩუენ	PRON	Pron	Case=Dat|Number=Plur|Person=1|PronType=Prs	11	iobj	_	Translit=čʻuenda
14	დატევებად	დატევება	VERB	Verb	Case=Ess|Number=Sing|VerbForm=Vnoun	11	csubj	_	Translit=datevebad
15	სიტყუაჲ	სიტყუაჲ	NOUN	Noun	Case=Nom|Number=Sing	14	obj	_	Translit=sitquay
16	ღმრთისაჲ	ღმერთი	NOUN	Noun	Case=Gen|Number=Sing	15	nmod	_	Translit=ġmrtʻisay
17	და	და	CCONJ	Conj	_	18	cc	_	Translit=da
18	მსახურებად	მსახურება	VERB	Verb	Case=Ess|Number=Sing|VerbForm=Vnoun	14	conj	_	Translit=msaxurebad
19	ტაბლებსა	ტაბლა	NOUN	Noun	Case=Dat|Number=Plur	18	obj	_	SpaceAfter=No|Translit=tablebsa
20	.	.	PUNCT	F	PunctType=Peri	2	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 21 csubj	color:blue
1	ით(19)	ით(19)	NUM	Num	NumForm=Georgian|NumType=Card	3	dep	_	Translit=it(19)
2	ვითარმედ	ვითარმედ	SCONJ	Conj	_	3	mark	_	Translit=vitʻarmed
3	უჴმს	უჴმს	VERB	Verb	Aspect=Imp|Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=ux̣ms
4	წინამძღუართა	წინამძღუარი	NOUN	Noun	Case=Dat|Number=Plur	3	iobj	_	Translit=cinamżġuartʻa
5	ეკლესიისათა	ეკლესია	NOUN	Noun	Case=Dat|Case[stack]=Gen|Number=Sing	4	nmod	_	Translit=eklesiisatʻa
6	ეპისკოპოსთა	ეპისკოპოსი	NOUN	Noun	Case=Dat|Number=Plur	4	appos	_	Translit=episkopostʻa
7	ყოველსა	ყოველი	PRON	Pron	Case=Dat|Number=Sing|PronType=Tot	9	det	_	Translit=qovelsa
8	შინა	შინა	ADP	Post	AdpType=Post|Case=Dat	7	case	_	Translit=šina
9	დღესა	დღე	NOUN	Noun	Case=Dat|Number=Sing	3	obl	_	SpaceAfter=No|Translit=dġesa
10	,	,	PUNCT	F	PunctType=Comm	13	punct	_	Translit=,
11	ხოლო	ხოლო	CCONJ	Conj	_	13	cc	_	Translit=xolo
12	უფროჲსღა	უფროჲ	ADJ	Adj	Case=Gen|PartType=Emp	13	amod	_	Translit=upʻroysġa
13	კჳრიაკეთა	კჳრიაკე	NOUN	Noun	Case=Dat|Number=Plur	9	conj	_	SpaceAfter=No|Translit=kwriaketʻa
14	,	,	PUNCT	F	PunctType=Comm	13	punct	_	Translit=,
15	ყოვლისავე	ყოველი	PRON	Pron	Case=Gen|Number=Sing|PronType=Tot	16	det	_	Translit=qovlisave
16	სამღდელოჲსა	სამღდელოჲ	NOUN	Noun	Case=Gen|Number=Sing	17	nmod	_	Translit=samġdeloysa
17	მწყობრისა	მწყობრი	NOUN	Noun	Case=Gen|Number=Sing	22	obj	_	Translit=mcqobrisa
18	და	და	CCONJ	Conj	_	20	cc	_	Translit=da
19	ყოვლისა	ყოველი	PRON	Pron	Case=Gen|Number=Sing|PronType=Tot	20	det	_	Translit=qovlisa
20	ერისა	ერი	NOUN	Noun	Case=Gen|Number=Sing	17	conj	_	Translit=erisa
21	სწავლად	სწავლა	VERB	Verb	Case=Ess|Number=Sing|VerbForm=Vnoun	3	csubj	_	Translit=scavlad
22	სიტყუათა	სიტყუაჲ	NOUN	Noun	Case=Gen|Number=Plur	21	obj	_	Translit=sitquatʻa
23	კეთილად	კეთილად	ADV	Adv	AdvType=Man	24	advmod	_	Translit=ketʻilad
24	მსახურებისათა	მსახურება	VERB	Verb	Case=Dat|Case[stack]=Gen|Number=Sing|VerbForm=Vnoun	22	nmod	_	Translit=msaxurebisatʻa
25	საღმრთოსა	საღმრთოჲ	ADJ	Adj	Case=Gen|Number=Sing	26	amod	_	Translit=saġmrtʻosa
26	წერილისა	წერილი	NOUN	Noun	Case=Gen|Number=Sing	28	obl	_	Translit=cerilisa
27	გან	გან	ADP	Post	AdpType=Post|Case=Ins	26	case	_	Translit=gan
28	გამოხუმითა	გამოხუმა	VERB	Verb	Case=Ins|Number=Sing|VerbForm=Vnoun	21	obl	_	Translit=gamoxumitʻa
29	ჭეშმარიტებისა	ჭეშმარიტება	NOUN	Noun	Case=Gen|Number=Sing	31	nmod	_	Translit=češmaritebisa
30	გულისჴმის	გულისჴმა	NOUN	Noun	Case=Gen|Number=Sing	31	nmod	_	Translit=gulisx̣mis
31	ყოფითა	ყოფა	VERB	Verb	Case=Ins|Number=Sing|VerbForm=Vnoun	28	obl	_	Translit=qopʻitʻa
32	და	და	CCONJ	Conj	_	33	cc	_	Translit=da
33	სამართალთაჲთა	სამართალი	NOUN	Noun	Case=Ins|Case[stack]=Gen|Number=Plur	31	conj	_	Translit=samartʻaltʻaytʻa
34	და	და	CCONJ	Conj	_	36	cc	_	Translit=da
35	არა	არა	PART	Part	PartType=Neg	36	advmod:neg	_	Translit=ara
36	გარდასლვითა	გარდასლვა	VERB	Verb	Case=Ins|Number=Sing|VerbForm=Vnoun	28	conj	_	Translit=gardaslvitʻa
37	ეგერა	ეგერა	ADV	Adv	_	38	advmod	_	Translit=egera
38	დასხმულთა	დასხმული	VERB	Verb	Case=Gen|Number=Plur|VerbForm=Part|Voice=Pass	39	amod	_	Translit=dasxmultʻa
39	საზღვართაჲთა	საზღვარი	NOUN	Noun	Case=Ins|Case[stack]=Gen|Number=Plur	36	obl	_	SpaceAfter=No|Translit=sazġvartʻaytʻa
40	,	,	PUNCT	F	PunctType=Comm	36	punct	_	Translit=,
41	ანუ	ანუ	CCONJ	Conj	_	44	cc	_	Translit=anu
42	ღმერთშემოსილთა	ღმერთშემოსილი	VERB	Verb	Case=Gen|Number=Plur|VerbForm=Part|Voice=Pass	43	amod	_	Translit=ġmertʻšemosiltʻa
43	მამათა	მამაჲ	NOUN	Noun	Case=Gen|Number=Plur	44	nmod	_	Translit=mamatʻa
44	მოცემისაჲთა	მოცემა	VERB	Verb	Case=Ins|Case[stack]=Gen|Number=Sing|VerbForm=Vnoun	36	conj	_	SpaceAfter=No|Translit=mocʻemisaytʻa
45	.	.	PUNCT	F	PunctType=Peri	3	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj	color:blue
1	თ(9)	თ(9)	NUM	Num	NumForm=Georgian|NumType=Card	3	dep	_	Translit=t(9)
2	არა	არა	PART	Part	PartType=Neg	3	advmod:neg	_	Translit=ara
3	ჯერ	ჯერ	ADV	Adv	AdvType=Tim	0	root	_	Translit=jer
4	არს	ყოფა	AUX	Verb	Aspect=Imp|Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	Translit=ars
5	,	,	PUNCT	F	PunctType=Comm	3	punct	_	Translit=,
6	რაჲთა	რაჲთა	SCONJ	SCONJ	_	7	mark	_	Translit=raytʻa
7	აქუნდეს	ქონება	VERB	Verb	Aspect=Imp|Mood=Sub|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj	_	Translit=akʻundes
8	მოყუასსა	მოყუასი	NOUN	Noun	Case=Dat|Number=Sing	7	iobj	_	Translit=moquassa
9	ეკლესიისასა	ეკლესია	NOUN	Noun	Case=Dat|Case[stack]=Gen|Number=Sing	8	nmod	_	Translit=eklesiisasa
10	საკაპილიონოჲ	საკაპილიონოჲ	ADJ	Adj	Case=Nom|Number=Sing	11	amod	_	Translit=sakapilionoy
11	ქულბაგი	ქულბაგი	NOUN	Noun	Case=Nom|Number=Sing	7	nsubj	_	SpaceAfter=No|Translit=kʻulbagi
12	,	,	PUNCT	F	PunctType=Comm	3	punct	_	Translit=,
13	რამეთუ	რამეთუ	SCONJ	SCONJ	_	25	mark	_	Translit=rametʻu
14	უკუეთუ	უკუეთუ	SCONJ	SCONJ	_	20	mark	_	Translit=ukuetʻu
15	არცათუ	არცათუ	PART	Part	PartType=Neg	20	advmod:neg	_	Translit=arcʻatʻu
16	შესლვაჲ	შესლვა	VERB	Verb	Case=Nom|Number=Sing|VerbForm=Vnoun	20	nsubj	_	Translit=šeslvay
17	კაპილიონად	კაპილიონი	NOUN	Noun	Case=Ess|Number=Sing	16	obl	_	Translit=kapilionad
18	ბრძანებულ	ბრძანებული	VERB	Verb	VerbForm=Part|Voice=Pass	3	advcl	_	Translit=brżanebul
19	არს	ყოფა	AUX	Verb	Aspect=Imp|Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin|Voice=Act	18	cop	_	Translit=ars
20	ეგევითარისა	ეგევითარი	PRON	Pron	Case=Gen|Number=Sing|PronType=Dem	18	amod	_	Translit=egevitʻarisa
21	მისდა	მისი	PRON	Pron	Case=Dat|Number=Sing|PronType=Prs	20	nmod	_	SpaceAfter=No|Translit=misda
22	,	,	PUNCT	F	PunctType=Comm	25	punct	_	Translit=,
23	რაოდენ	რაოდენ	ADV	Adv	AdvType=Man	24	advmod	_	Translit=raoden
24	უფროჲს	უფროჲ	ADJ	Adj	Case=Gen|Number=Sing	25	amod	_	Translit=upʻroys
25	უწესო	უწესო	ADJ	Adj	Case=Nom|Number=Sing	3	advcl	_	Translit=uceso
26	არს	ყოფა	AUX	Verb	Aspect=Imp|Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin|Voice=Act	25	cop	_	Translit=ars
27	მის	მისი	PRON	Pron	Case=Gen|Number=Sing|PronType=Prs	25	obl	_	Translit=mis
28	თჳს	თჳს	ADP	Post	AdpType=Post|Case=Gen	27	case	_	Translit=tʻws
29	სხუათა	სხუა	PRON	Pron	Case=Gen|Number=Plur|PronType=Ind	30	det	_	Translit=sxuata
30	მსახურ	მსახური	NOUN	Noun	Case=Nom|Number=Sing	31	compound	_	Translit=msaxur
31	ყოფაჲ	ყოფა	VERB	Verb	Case=Nom|Number=Sing|VerbForm=Vnoun	25	nsubj	_	Translit=qopʻay
32	მას	ის	PRON	Pron	Case=Dat|Number=Sing|PronType=Prs	37	obl	_	Translit=mas
33	შინა	შინა	ADP	Post	AdpType=Post|Case=Dat	32	case	_	Translit=šina
34	და	და	CCONJ	Conj	_	39	cc	_	Translit=da
35	რომელნი	რომელი	PRON	Pron	Case=Nom|ExtPos=PRON|Number=Plur|PronType=Rel	37	nsubj	_	Translit=romelni
36	იგი	იგი	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	35	fixed	_	Translit=igi
37	შეუტყუებელ	შეუტყუებელი	ADJ	Adj	Case=Nom|Number=Plur	30	xcomp	_	Translit=šeutquebel
38	არიან	ყოფა	AUX	Verb	Aspect=Imp|Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres|VerbForm=Fin|Voice=Act	37	cop	_	Translit=arian
39	მისდა	მისი	PRON	Pron	Case=Dat|Number=Sing|PronType=Prs	31	conj	_	SpaceAfter=No|Translit=misda
40	,	,	PUNCT	F	PunctType=Comm	39	punct	_	Translit=,
41	ჴელყოფაჲ	ჴელყოფა	VERB	Verb	Case=Nom|Number=Sing|VerbForm=Vnoun	31	appos	_	Translit=x̣elqopʻay
42	მათი	მათი	PRON	Pron	Case=Gen|Number=Plur|PronType=Prs	41	nmod	_	SpaceAfter=No|Translit=matʻi
43	.	.	PUNCT	F	PunctType=Peri	3	punct	_	Translit=.

~~~



---
layout: base
title:  'Statistics of dep in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `dep`

This relation is universal.

17 nodes (0%) are attached to their parents as `dep`.

9 instances of `dep` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.58823529411765.

The following 8 pairs of parts of speech are connected with `dep`: <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (5; 29% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-X.html">X</a></tt> (4; 24% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (2; 12% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (2; 12% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt> (1; 6% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 dep	color:blue
1	See	see	DET	P	Case=Nom|Number=Sing|PronType=Dem	2	det	2:det	_
2	asjaolu	asja_olu	NOUN	S	Case=Nom|Number=Sing	7	nsubj	7:nsubj	Arg=võimaldama_Arg_0
3	pluss	pluss	NOUN	S	Case=Nom|Number=Sing	6	dep	6:dep	_
4	töötute	töötu	NOUN	S	Case=Gen|Number=Plur	6	nmod	6:nmod	_
5	suur	suur	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	6	amod	6:amod	_
6	hulk	hulk	NOUN	S	Case=Nom|Number=Sing	2	conj	2:conj|7:nsubj	_
7	võimaldab	võimaldama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Verb=võimaldama
8	toota	tootma	VERB	V	VerbForm=Inf	7	xcomp	7:xcomp	Arg=võimaldama_Arg_1|Verb=tootma
9	üha	üha	ADV	D	_	10	advmod	10:advmod	_
10	odavamalt	odavamalt	ADV	D	_	8	advmod	8:advmod	_
11	üha	üha	ADV	D	_	12	advmod	12:advmod	_
12	uutes	uus	ADJ	A	Case=Ine|Degree=Pos|Number=Plur	13	amod	13:amod	_
13	maades	maa	NOUN	S	Case=Ine|Number=Plur	8	obl:lmod	8:obl	SpaceAfter=No
14	.	.	PUNCT	Z	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 dep	color:blue
1	Lõpuks	lõpuks	ADV	D	_	4	advmod:tmod	4:advmod	_
2	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
3	välja	välja	ADV	D	_	4	compound:prt	4:compound	_
4	toodud	tooma	VERB	V	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	kõigi	kõik	DET	P	Case=Gen|Number=Plur|PronType=Tot	7	det	7:det	_
6	analüüsitud	analüüsi=tud	ADJ	A	Degree=Pos|Tense=Past|VerbForm=Part|Voice=Pass	7	acl	7:acl	_
7	mõjurite	mõjur	NOUN	S	Case=Gen|Number=Plur	8	nmod	8:nmod	_
8	kogumõju	kogu_mõju	NOUN	S	Case=Nom|Number=Sing	4	obj	4:obj	_
9	sissetulekute	sisse_tulek	NOUN	S	Case=Gen|Number=Plur	10	nmod	10:nmod	_
10	ebavõrdsusele	eba_võrdsus	NOUN	S	Case=All|Number=Sing	8	nmod	8:nmod	_
11	ceteris	ceteris	X	T	Foreign=Yes	8	dep	8:dep	OrigLang=la
12	paribus	paribus	X	T	Foreign=Yes	11	flat	11:flat	OrigLang=la
13	ka	ka	ADV	D	_	14	advmod	14:advmod	_
14	graafiliselt	graafilise=lt	ADV	D	_	4	advmod	4:advmod	_
15	ning	ning	CCONJ	J	_	16	cc	16:cc	_
16	võrreldud	võrdlema	VERB	V	Tense=Past|VerbForm=Part|Voice=Pass	4	conj	0:root|4:conj	Verb=võrdlema
17	seda	see	PRON	P	Case=Par|Number=Sing|PronType=Dem	16	obj	16:obj	Arg=võrdlema_Arg_1
18	andmepõhist	andme_põhine	ADJ	A	Case=Par|Degree=Pos|Number=Sing	19	amod	19:amod	_
19	koguseost	kogu_seos	NOUN	S	Case=Par|Number=Sing	20	obj	20:obj	_
20	kirjeldava	kirjeldav	ADJ	A	Case=Gen|Degree=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	22	acl	22:acl	_
21	vaatluste	vaatlus	NOUN	S	Case=Gen|Number=Plur	22	nmod	22:nmod	_
22	pilvega	pilv	NOUN	S	Case=Com|Number=Sing	16	obl	16:obl	Arg=võrdlema_Arg_2|SpaceAfter=No
23	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 dep	color:blue
1	“	“	PUNCT	Z	_	5	punct	5:punct	_
2	Paljude	palju	DET	P	Case=Gen|Number=Plur|PronType=Ind	3	det	3:det	_
3	inimeste	inimene	NOUN	S	Case=Gen|Number=Plur	4	nmod	4:nmod	_
4	ettekujutus	ette_kujutus	NOUN	S	Case=Nom|Number=Sing	5	nsubj	5:nsubj	_
5	on	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
6	,	,	PUNCT	Z	_	8	punct	8:punct	_
7	et	et	SCONJ	J	_	8	mark	8:mark	_
8	stepp	stepp	NOUN	S	Case=Nom|Number=Sing	5	dep	5:dep	SpaceAfter=No
9	,	,	PUNCT	Z	_	10	punct	10:punct	_
10	see	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	12	nsubj:cop	12:nsubj:cop	_
11	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	12:cop	_
12	aeroobikasuund	aeroobika_suund	NOUN	S	Case=Nom|Number=Sing	8	acl	8:acl	_
13	-	-	PUNCT	Z	_	12	punct	12:punct	_
14	steppaeroobika	stepp_aeroobika	NOUN	S	Case=Nom|Number=Sing	12	appos	12:appos	SpaceAfter=No
15	!	!	PUNCT	Z	_	5	punct	5:punct	_
16	”	”	PUNCT	Z	_	5	punct	5:punct	_

~~~



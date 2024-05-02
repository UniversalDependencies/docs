---
layout: base
title:  'Statistics of aux in UD_Armenian-BSUT'
udver: '2'
---

## Treebank Statistics: UD_Armenian-BSUT: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="hy_bsut-dep-aux-ex.html">aux:ex</a></tt>.

1933 nodes (5%) are attached to their parents as `aux`.

1156 instances of `aux` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14899120538024.

The following 6 pairs of parts of speech are connected with `aux`: <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-AUX.html">AUX</a></tt> (1900; 98% instances), <tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_bsut-pos-AUX.html">AUX</a></tt> (12; 1% instances), <tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_bsut-pos-AUX.html">AUX</a></tt> (11; 1% instances), <tt><a href="hy_bsut-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_bsut-pos-AUX.html">AUX</a></tt> (7; 0% instances), <tt><a href="hy_bsut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_bsut-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="hy_bsut-pos-ADV.html">ADV</a></tt>-<tt><a href="hy_bsut-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	2	2	NUM	_	NumForm=Digit|NumType=Card	3	nummod	_	Translit=2|LTranslit=2|SpaceAfter=No
2	.	.	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.
3	Աղբյուր	աղբյուր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=Aġbyowr|LTranslit=aġbyowr|SpaceAfter=No
4	.	.	PUNCT	_	_	8	punct	_	Translit=.|LTranslit=.
5	ով	ով	PRON	_	Case=Nom|Number=Sing|PronType=Int	8	nsubj	_	Translit=ov|LTranslit=ov
6	՞	՞	PUNCT	_	_	5	punct	_	Translit=?|LTranslit=?
7	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	aux	_	Translit=ē|LTranslit=em
8	բեռնել	բեռնել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	3	appos	_	Translit=beṙnel|LTranslit=beṙnel
9	կոնտենտը	կոնտենտ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	8	obj	_	Translit=kontentë|LTranslit=kontent|SpaceAfter=No
10	:	:	PUNCT	_	Foreign=Yes	8	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 aux	color:blue
1	Այդպես	այդպես	ADV	_	Deixis=Med|PronType=Dem	2	advmod	_	Translit=Aydpes|LTranslit=aydpes
2	ընդգծվում	ընդգծվել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	Translit=ëndgçvowm|LTranslit=ëndgçvel
3	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	aux	_	Translit=ē|LTranslit=em
4	ատելություն	ատելություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll	5	obj	_	Translit=atelowt’yown|LTranslit=atelowt’yown
5	հրահրող	հրահրել	VERB	_	Aspect=Dur|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	7	acl	_	Translit=hrahroġ|LTranslit=hrahrel
6	այն	այն	DET	_	Deixis=Remt|PronType=Dem	7	det	_	Translit=ayn|LTranslit=ayn
7	բառերը	բառ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	2	nsubj	_	Translit=baṙerë|LTranslit=baṙ|SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	Translit=,|LTranslit=,
9	որոնք	որոնք	PRON	_	Case=Nom|Number=Plur|PronType=Rel	10	nsubj	_	Translit=oronk’|LTranslit=oronk’
10	դառնում	դառնալ	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	7	acl:relcl	_	Translit=daṙnowm|LTranslit=daṙnal
11	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	12	aux	_	Translit=en|LTranslit=em
12	սովորական	սովորական	ADJ	_	Degree=Pos	10	xcomp	_	Translit=sovorakan|LTranslit=sovorakan|SpaceAfter=No
13	։	։	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 aux	color:blue
1	Արտակն	Արտակ	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Giv|Number=Sing	3	nsubj	_	Translit=Artakn|LTranslit=Artak
2	արդեն	արդեն	ADV	_	_	3	advmod	_	Translit=arden|LTranslit=arden
3	մեքենայի	մեքենա	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	0	root	_	Translit=mek’enayi|LTranslit=mek’ena
4	մեջ	մեջ	ADP	_	AdpType=Post	3	case	_	Translit=meǰ|LTranslit=meǰ
5	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	3	aux	_	Translit=ēr|LTranslit=em|SpaceAfter=No
6	,	,	PUNCT	_	_	13	punct	_	Translit=,|LTranslit=,
7	որ	որ	SCONJ	_	_	13	mark	_	Translit=or|LTranslit=or
8	աշխատակցուհին	աշխատակցուհի	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	13	nsubj	_	Translit=ašxatakc’owhin|LTranslit=ašxatakc’owhi
9	դեղերի	դեղ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	10	nmod:poss	_	Translit=deġeri|LTranslit=deġ
10	տոպրակը	տոպրակ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	11	nmod:npmod	_	Translit=toprakë|LTranslit=toprak
11	ձեռքին	ձեռք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	13	obl	_	Translit=jeṙk’in|LTranslit=jeṙk’
12	վազելով	վազել	VERB	_	Case=Ins|Definite=Ind|Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	13	advcl	_	Translit=vazelov|LTranslit=vazel
13	եկավ	գալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	3	advcl	_	Translit=ekav|LTranslit=gal|SpaceAfter=No
14	.	.	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~



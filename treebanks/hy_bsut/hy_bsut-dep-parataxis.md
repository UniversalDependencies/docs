---
layout: base
title:  'Statistics of parataxis in UD_Armenian-BSUT'
udver: '2'
---

## Treebank Statistics: UD_Armenian-BSUT: Relations: `parataxis`

This relation is universal.

20 nodes (1%) are attached to their parents as `parataxis`.

13 instances of `parataxis` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.6.

The following 8 pairs of parts of speech are connected with `parataxis`: <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt> (11; 55% instances), <tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt> (2; 10% instances), <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> (2; 10% instances), <tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="hy_bsut-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-NUM.html">NUM</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 parataxis	color:blue
1	Երևում	երևալ	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	5	parataxis	_	Translit=Erewowm|LTranslit=erewal
2	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	aux	_	Translit=ē|LTranslit=em|SpaceAfter=No
3	՝	՝	PUNCT	_	_	5	punct	_	Translit=,|LTranslit=,
4	չեն	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	5	aux	_	Translit=čen|LTranslit=em
5	կարողացել	կարողանալ	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	Translit=karoġac’el|LTranslit=karoġanal
6	համոզել	համոզել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	5	xcomp	_	Translit=hamozel|LTranslit=hamozel
7	երկու	երկու	NUM	_	NumForm=Word|NumType=Card	8	nummod	_	Translit=erkow|LTranslit=erkow
8	հարցում	հարց	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	6	obl	_	Translit=harc’owm|LTranslit=harc’
9	էլ	էլ	ADV	_	_	8	advmod:emph	_	Translit=ēl|LTranslit=ēl|SpaceAfter=No
10	,	,	PUNCT	_	_	13	punct	_	Translit=,|LTranslit=,
11	և	և	CCONJ	_	_	13	cc	_	Translit=ew|LTranslit=ew
12	չէին	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Imp|VerbForm=Fin	13	cop	_	Translit=čēin|LTranslit=em
13	կարող	կարող	ADJ	_	Degree=Pos	5	conj	_	Translit=karoġ|LTranslit=karoġ
14	համոզել	համոզել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	13	xcomp	_	Translit=hamozel|LTranslit=hamozel|SpaceAfter=No
15	։	։	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 15 parataxis	color:blue
1	«	«	PUNCT	_	_	4	punct	_	Translit=«|LTranslit=«|SpaceAfter=No
2	Սա	սա	PRON	_	Case=Nom|Deixis=Prox|Number=Sing|PronType=Dem	4	nsubj	_	Translit=Sa|LTranslit=sa
3	ուղիղ	ուղիղ	ADJ	_	Degree=Pos	4	amod	_	Translit=owġiġ|LTranslit=owġiġ
4	մասնակցություն	մասնակցություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=masnakc’owt’yown|LTranslit=masnakc’owt’yown
5	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	cop	_	Translit=ē|LTranslit=em
6	խոշորագույն	խոշոր	ADJ	_	Degree=Sup	7	amod	_	Translit=xošoragowyn|LTranslit=xošor
7	կոմբինատին	կոմբինատ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	4	obj	_	Translit=kombinatin|LTranslit=kombinat
8	և	և	CCONJ	_	_	11	cc	_	Translit=ew|LTranslit=ew
9	ֆինանսական	ֆինանսական	ADJ	_	_	10	amod	_	Translit=finansakan|LTranslit=finansakan
10	հոսքերի	հոսք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	11	nmod:poss	_	Translit=hosk’eri|LTranslit=hosk’
11	հսկում	հսկում	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll	4	conj	_	Translit=hskowm|LTranslit=hskowm|SpaceAfter=No
12	»	»	PUNCT	_	_	4	punct	_	Translit=»|LTranslit=»|SpaceAfter=No
13	,	,	PUNCT	_	_	15	punct	_	Translit=,|LTranslit=,|SpaceAfter=No
14	-	-	PUNCT	_	_	15	punct	_	Translit=-|LTranslit=-
15	ասել	ասել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	4	parataxis	_	Translit=asel|LTranslit=asel
16	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	15	aux	_	Translit=ē|LTranslit=em
17	Ռոբերտ	Ռոբերտ	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	15	nsubj	_	Translit=Ṙobert|LTranslit=Ṙobert
18	Քոչարյանը	Քոչարյան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Sur|Number=Sing	17	flat:name	_	Translit=K’očaryanë|LTranslit=K’očaryan|SpaceAfter=No
19	:	:	PUNCT	_	Foreign=Yes	15	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 parataxis	color:blue
1	Ամեն	ամեն	DET	_	PronType=Tot	2	det	_	Translit=Amen|LTranslit=amen
2	դեպքում	դեպք	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	5	parataxis	_	Translit=depk’owm|LTranslit=depk’|SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	Translit=,|LTranslit=,
4	Մոսկվան	Մոսկվա	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Def|NameType=Geo|Number=Sing	5	nsubj	_	Translit=Moskvan|LTranslit=Moskva
5	հաղթում	հաղթել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=haġt’owm|LTranslit=haġt’el
6	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	aux	_	Translit=ē|LTranslit=em|SpaceAfter=No
7	։	։	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.

~~~



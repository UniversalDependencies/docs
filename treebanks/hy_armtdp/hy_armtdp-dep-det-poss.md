---
layout: base
title:  'Statistics of det:poss in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-det.html">det</a></tt>.

1054 nodes (1%) are attached to their parents as `det:poss`.

1050 instances of `det:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.39184060721063.

The following 6 pairs of parts of speech are connected with `det:poss`: <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (1033; 98% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (8; 1% instances), <tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (7; 1% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det:poss	color:blue
1	ՉԱՐԵՆՑԸ	Չարենց	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Prs|Number=Sing	0	root	_	Translit=ČARENC’Ë|LTranslit=Čarenc’|SpaceAfter=No
2	...	...	PUNCT	_	_	4	punct	_	Translit=...|LTranslit=...
3	ԻՐ	իր	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Emp|Reflex=Yes	4	det:poss	_	Translit=IR|LTranslit=ir
4	ՏԱՆԸ	տուն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	1	nmod:npmod	_	Translit=TANË|LTranslit=town

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det:poss	color:blue
1	ՄԱՐԶԻՉՆԵՐԸ	մարզիչ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Plur	2	nsubj	_	Translit=MARZIČNERË|LTranslit=marzič
2	ՊԱՏԺԵՑԻՆ	պատժել	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=PATŽEC’IN|LTranslit=patžel
3	ԻՐԵՆՑ	իրենք	PRON	_	Case=Dat|Number=Plur|Person=3|PronType=Emp|Reflex=Yes	4	det:poss	_	Translit=IRENC’|LTranslit=irenk’
4	ՍԱՆԵՐԻՆ	սան	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Plur	2	obj	_	Translit=SANERIN|LTranslit=san

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 det:poss	color:blue
1	–	–	PUNCT	_	_	12	punct	_	Translit=–|LTranslit=–
2	Բա	բա	INTJ	_	Style=Vrnc	12	discourse	_	Translit=Ba|LTranslit=ba
3	՛	՛	PUNCT	_	_	2	punct	_	Translit=՛|LTranslit=՛
4	,	,	PUNCT	_	_	6	punct	_	Translit=,|LTranslit=,|SpaceAfter=No
5	–	–	PUNCT	_	_	6	punct	_	Translit=–|LTranslit=–
6	լսվեց	լսվել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	12	parataxis	_	Translit=lsvec’|LTranslit=lsvel
7	ետևից	ետևից	ADV	_	_	6	advmod	_	Translit=etewic’|LTranslit=etewic’|SpaceAfter=No
8	,	,	PUNCT	_	_	6	punct	_	Translit=,|LTranslit=,|SpaceAfter=No
9	–	–	PUNCT	_	_	6	punct	_	Translit=–|LTranslit=–
10	էսպես	էսպես	ADV	_	Deixis=Prox|PronType=Dem|Style=Coll	11	advmod	_	Translit=ēspes|LTranslit=ēspes
11	խելոք	խելոք	ADJ	_	Degree=Pos	12	amod	_	Translit=xelok’|LTranslit=xelok’
12	շուն	շուն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=šown|LTranslit=šown
13	ա	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Coll|Tense=Pres|VerbForm=Fin	12	cop	_	Translit=a|LTranslit=em
14	մեր	մեր	DET	_	Number=Plur|Person=1|Poss=Yes|PronType=Prs	15	det:poss	_	Translit=mer|LTranslit=mer
15	Չալոն	Չալո	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Def|NameType=Giv|Number=Sing	12	nsubj	_	Translit=Čalon|LTranslit=Čalo|SpaceAfter=No
16	։	։	PUNCT	_	_	12	punct	_	Translit=.|LTranslit=.

~~~



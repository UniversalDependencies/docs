---
layout: base
title:  'Statistics of nmod in UD_Western_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Western_Armenian-ArmTDP: Relations: `nmod`

This relation is universal.
There are 2 language-specific subtypes of `nmod`: <tt><a href="hyw_armtdp-dep-nmod-npmod.html">nmod:npmod</a></tt>, <tt><a href="hyw_armtdp-dep-nmod-poss.html">nmod:poss</a></tt>.

329 nodes (1%) are attached to their parents as `nmod`.

317 instances of `nmod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.60182370820669.

The following 9 pairs of parts of speech are connected with `nmod`: <tt><a href="hyw_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hyw_armtdp-pos-NOUN.html">NOUN</a></tt> (204; 62% instances), <tt><a href="hyw_armtdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hyw_armtdp-pos-NOUN.html">NOUN</a></tt> (80; 24% instances), <tt><a href="hyw_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hyw_armtdp-pos-PROPN.html">PROPN</a></tt> (34; 10% instances), <tt><a href="hyw_armtdp-pos-NUM.html">NUM</a></tt>-<tt><a href="hyw_armtdp-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="hyw_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hyw_armtdp-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="hyw_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hyw_armtdp-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="hyw_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hyw_armtdp-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="hyw_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="hyw_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hyw_armtdp-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod	color:blue
1	Համբուրեց	համբուրել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=Hambowrec’|LTranslit=hambowrel
2	զայն	ան	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	1	obj	_	Translit=zayn|LTranslit=an|SpaceAfter=No
3	,	,	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
4	աչքին	աչք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	7	nmod:npmod	_	Translit=ačk’in|LTranslit=ačk’
5	մէջ	մէջ	ADP	_	AdpType=Post	4	case	_	Translit=mēǰ|LTranslit=mēǰ
6	արցունքէ	արցունք	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing	7	nmod	_	Translit=arc’ownk’ē|LTranslit=arc’ownk’
7	կաթիլով	կաթիլ	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	1	obl	_	Translit=kat’ilov|LTranslit=kat’il
8	մը	մը	DET	_	PronType=Art	7	det	_	Translit=më|LTranslit=më|SpaceAfter=No
9	:	:	PUNCT	_	Foreign=Yes	1	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod	color:blue
1	Պրն	պրն.	NOUN	_	Abbr=Yes|Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	3	nmod	_	Translit=Prn|LTranslit=prn.|SpaceAfter=No
2	.	.	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.
3	Քառլիէի	Քառլիէ	PROPN	_	Animacy=Hum|Case=Dat|Definite=Ind|NameType=Sur|Number=Sing	4	nmod:poss	_	Translit=K’aṙliēi|LTranslit=K’aṙliē
4	քարտուղարը	քարտուղար	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	6	nsubj	_	Translit=k’artowġarë|LTranslit=k’artowġar
5	քաղաքավար	քաղաքավար	ADJ	_	Degree=Pos	6	amod	_	Translit=k’aġak’avar|LTranslit=k’aġak’avar
6	մարդ	մարդ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=mard|LTranslit=mard
7	մըն	մը	DET	_	PronType=Art	6	det	_	Translit=mën|LTranslit=më
8	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	cop	_	Translit=ē|LTranslit=em|SpaceAfter=No
9	։	։	PUNCT	_	_	6	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod	color:blue
1	Սոնա	Սոնա	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	3	nmod	_	Translit=Sona|LTranslit=Sona
2	«	«	PUNCT	_	_	3	punct	_	Translit=«|LTranslit=«|SpaceAfter=No
3	եար	եար	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=ear|LTranslit=ear|SpaceAfter=No
4	»	»	PUNCT	_	_	3	punct	_	Translit=»|LTranslit=»|SpaceAfter=No
5	երով	ը	NOUN	_	Animacy=Hum|Case=Ins|Definite=Ind|Hyph=Yes|Number=Plur	3	dep	_	Translit=erov|LTranslit=ë
6	ու	ու	CCONJ	_	_	7	cc	_	Translit=ow|LTranslit=ow
7	պարերով	պար	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Plur	3	conj	_	Translit=parerov|LTranslit=par|SpaceAfter=No
8	։	։	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~



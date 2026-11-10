---
layout: base
title:  'Statistics of nsubj:pass in UD_Old_Georgian-OGLauRo'
udver: '2'
---

## Treebank Statistics: UD_Old_Georgian-OGLauRo: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="oge_oglauro-dep-nsubj.html">nsubj</a></tt>.

18 nodes (0%) are attached to their parents as `nsubj:pass`.

11 instances of `nsubj:pass` (61%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.44444444444444.

The following 2 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_oglauro-pos-NOUN.html">NOUN</a></tt> (10; 56% instances), <tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_oglauro-pos-PRON.html">PRON</a></tt> (8; 44% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 nsubj:pass	color:blue
1	და	და	CCONJ	Cj_Coord	_	3	cc	_	_
2	ესრეთ	ესრეთ	ADV	Adv_Dem	_	3	advmod	_	_
3	აღიშენენ	აღშენება	VERB	V_Pass_Aor_Imp_Pv_IV_S:3Sg	Mood=Imp|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	Preverb=Yes
4	და	და	CCONJ	Cj_Coord	_	5	cc	_	_
5	დაირთუენ	რთვა	VERB	V_Pass_Aor_Imp_Pv_IV_S:3Sg	Mood=Imp|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	3	conj	_	Preverb=Yes|Version=I
6	ყოველი	ყოველი	PRON	Pron_Tot_Nom_Sg	Case=Nom|Number=Sing|PronType=Tot	8	det	_	_
7	იგი	იგი	PRON	Pron_Dem_Nom_Sg	Case=Nom|Number=Sing|PronType=Dem	8	det	_	_
8	ტაძარი	ტაძარი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	3	nsubj:pass	_	SpaceAfter=No
9	.	.	PUNCT	Punct_FullStop	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nsubj:pass	color:blue
1	და	და	CCONJ	Cj_Coord	_	2	cc	_	_
2	დაიწერა	დაწერა	VERB	V_Pass_Aor_IV_Pv_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	Preverb=Yes|Version=I
3	ყოველი	ყოველი	PRON	Pron_Tot_Nom_Sg	Case=Nom|Number=Sing|PronType=Tot	2	nsubj:pass	_	_
4	იგი	იგი	PRON	Pron_Dem_Nom_Sg	Case=Nom|Number=Sing|PronType=Dem	3	det	_	_
5	სწორად	სწორად	ADV	Adv	_	2	advmod	_	_
6	რიცხჳსა	რიცხჳ	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	5	obl	_	_
7	მის	იგი	PRON	Pron_Dem_Gen_Sg	Case=Gen|Number=Sing|PronType=Dem	6	det	_	_
8	სრულისაჲ	სრული	ADJ	A_Gen_Sg_Nom_Sg	Case=Gen|Case[sauf]=Nom|Number=Sing|Number[sauf]=Sing	6	amod	_	SpaceAfter=No
9	.	.	PUNCT	Punct_FullStop	_	2	punct	_	_

~~~



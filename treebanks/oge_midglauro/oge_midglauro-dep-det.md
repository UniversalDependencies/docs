---
layout: base
title:  'Statistics of det in UD_Old_Georgian-MidGLauRo'
udver: '2'
---

## Treebank Statistics: UD_Old_Georgian-MidGLauRo: Relations: `det`

This relation is universal.

167 nodes (3%) are attached to their parents as `det`.

140 instances of `det` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25748502994012.

The following 4 pairs of parts of speech are connected with `det`: <tt><a href="oge_midglauro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="oge_midglauro-pos-PRON.html">PRON</a></tt> (159; 95% instances), <tt><a href="oge_midglauro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="oge_midglauro-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="oge_midglauro-pos-NUM.html">NUM</a></tt>-<tt><a href="oge_midglauro-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="oge_midglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_midglauro-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	უჴმე	ჴმობა	VERB	V_Act_Aor_S:1Sg_IO:3	Mood=Ind|Number[subj]=Sing|Person[io]=3|Person[subj]=1|Tense=Past|VerbForm=Fin	0	root	_	Preverb=No
2	მას	იგი	PRON	Pron_Dem_Dat_Sg	Case=Dat|Number=Sing|PronType=Dem	3	det	_	_
3	კაცსა	კაცი	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	1	iobj	_	SpaceAfter=No
4	:	:	PUNCT	Punct_Colon	_	5	punct	_	_
5	თქვი	თქმა	VERB	V_Act_Aor_Imp_S:2Sg	Mood=Imp|Number[subj]=Sing|Person[subj]=2|Tense=Past|VerbForm=Fin	1	ccomp	_	SpaceAfter=No|Preverb=No
6	,	,	PUNCT	Punct_Comma	_	7	punct	_	_
7	ძმაო	ძმა	NOUN	N_Voc_Sg	Case=Voc|Number=Sing	5	vocative	_	SpaceAfter=No
8	,	,	PUNCT	Punct_Comma	_	7	punct	_	_
9	ამბრი	ამბრი	PROPN	N_Prop	NameType=Prs	11	nmod	_	_
10	არაბის	არაბი	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	9	appos	_	_
11	ამბავი	ამბავი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	5	obj	_	_
12	ო	ო	PART	Part	Evident=Nfh	5	mark	_	_
13	.	.	PUNCT	Punct_FullStop	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	და	და	CCONJ	Cj_Coord	_	2	cc	_	_
2	იყო	ყოფა	VERB	V_Act_Aor_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	Preverb=No
3	მეფე	მეფე	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	2	nsubj	_	_
4	და	და	CCONJ	Cj_Coord	_	6	cc	_	_
5	ყოველი	ყოველი	PRON	Pron_Tot_Nom_Sg	Case=Nom|Number=Sing|PronType=Tot	6	det	_	_
6	იამანეთი	იამანეთი	PROPN	N_Prop_Nom_Sg	Case=Nom|NameType=Geo|Number=Sing	3	conj	_	_
7	დიდსა	დიდი	ADJ	A_Dat_Sg	Case=Dat|Number=Sing	8	amod	_	_
8	სიხარულსა	სიხარული	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	2	obl	_	_
9	შინა	შინა	ADP	Post	AdpType=Post|Case=Dat	8	case	_	SpaceAfter=No
10	.	.	PUNCT	Punct_FullStop	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	მან	იგი	PRON	Pron_Dem_Erg_Sg	Case=Erg|Number=Sing|PronType=Dem	2	det	_	_
2	მესამემან	მესამე	NUM	Num_Erg_Sg	Case=Erg|Number=Sing|NumType=Ord	4	nsubj	_	_
3	ეგრე	ეგრე	ADV	Adv	_	4	advmod	_	_
4	თქვა	თქმა	VERB	V_Act_Aor_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No|Preverb=No
5	:	:	PUNCT	Punct_Colon	_	9	punct	_	_
6	არაბეთს	არაბეთი	PROPN	N_Prop_Dat_Sg	Case=Dat|NameType=Geo|Number=Sing	9	obl	_	_
7	ამბრი	ამბრი	PROPN	N_Prop_Nom_Sg	Case=Nom|NameType=Prs|Number=Sing	9	nsubj	_	_
8	არაბი	არაბი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	7	appos	_	_
9	არის	ყოფა	VERB	V_Act_Pres_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin	4	ccomp	_	Preverb=No
10	ო	ო	PART	Part	Evident=Nfh	9	mark	_	_
11	.	.	PUNCT	Punct_FullStop	_	4	punct	_	_

~~~



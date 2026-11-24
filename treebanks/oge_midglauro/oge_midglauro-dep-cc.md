---
layout: base
title:  'Statistics of cc in UD_Old_Georgian-MidGLauRo'
udver: '2'
---

## Treebank Statistics: UD_Old_Georgian-MidGLauRo: Relations: `cc`

This relation is universal.

480 nodes (8%) are attached to their parents as `cc`.

480 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.28958333333333.

The following 8 pairs of parts of speech are connected with `cc`: <tt><a href="oge_midglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_midglauro-pos-CCONJ.html">CCONJ</a></tt> (356; 74% instances), <tt><a href="oge_midglauro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="oge_midglauro-pos-CCONJ.html">CCONJ</a></tt> (81; 17% instances), <tt><a href="oge_midglauro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="oge_midglauro-pos-CCONJ.html">CCONJ</a></tt> (19; 4% instances), <tt><a href="oge_midglauro-pos-PRON.html">PRON</a></tt>-<tt><a href="oge_midglauro-pos-CCONJ.html">CCONJ</a></tt> (11; 2% instances), <tt><a href="oge_midglauro-pos-ADV.html">ADV</a></tt>-<tt><a href="oge_midglauro-pos-CCONJ.html">CCONJ</a></tt> (5; 1% instances), <tt><a href="oge_midglauro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="oge_midglauro-pos-CCONJ.html">CCONJ</a></tt> (5; 1% instances), <tt><a href="oge_midglauro-pos-NUM.html">NUM</a></tt>-<tt><a href="oge_midglauro-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="oge_midglauro-pos-ADP.html">ADP</a></tt>-<tt><a href="oge_midglauro-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc	color:blue
1	და	და	CCONJ	Cj_Coord	_	2	cc	_	_
2	თქვა	თქმა	VERB	V_Act_Aor_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No|Preverb=No
3	:	:	PUNCT	Punct_Colon	_	5	punct	_	_
4	არა	არა	ADV	Adv_Neg	Polarity=Neg	5	advmod	_	_
5	არის	ყოფა	VERB	V_Act_Pres_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	Preverb=No
6	პირსა	პირი	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	5	obl	_	_
7	ქვეყანისასა	ქვეყანა	NOUN	N_Gen_Sg_Dat_Sg	Case=Gen|Case[sauf]=Dat|Number=Sing|Number[sauf]=Sing	6	nmod	_	_
8	ო	ო	PART	Part	Evident=Nfh	5	mark	_	_
9	.	.	PUNCT	Punct_FullStop	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cc	color:blue
1	ჩავარდა	ჩავარდნა	VERB	V_Act_Aor_Pv_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	Preverb=Yes
2	იამანთა	იამანი	PROPN	N_Prop_Obl_Pl	Case=Gen|NameType=Prs|Number=Plur	3	nmod	_	_
3	მეფე	მეფე	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	1	nsubj	_	_
4	და	და	CCONJ	Cj_Coord	_	6	cc	_	_
5	იამანეთისა	იამანეთი	PROPN	N_Prop_Gen_Sg	Case=Gen|NameType=Geo|Number=Sing	6	nmod	_	_
6	ქვეყანა	ქვეყანა	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	3	conj	_	_
7	შეჭირვებასა	შეჭირვება	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	1	obl	_	_
8	დიდსა	დიდი	ADJ	A_Dat_Sg	Case=Dat|Number=Sing	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	Punct_FullStop	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	საყვარლად	საყვარელი	ADJ	A_Adv	Case=Ess|Number=Sing	4	amod	_	_
2	და	და	CCONJ	Cj_Coord	_	3	cc	_	_
3	კარგად	კარგი	ADJ	A_Adv	Case=Ess|Number=Sing	1	conj	_	_
4	ამხანაგურად	ამხანაგური	ADJ	A_Adv	Case=Ess|Number=Sing	5	xcomp	_	_
5	მომეპყრა	მოპყრობა	VERB	V_Pass_Aor_Pv_EV_S:3Sg_IO:1Sg	Mood=Ind|Number[io]=Sing|Number[subj]=Sing|Person[io]=1|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No|Preverb=Yes|Version=E
6	.	.	PUNCT	Punct_FullStop	_	5	punct	_	_

~~~



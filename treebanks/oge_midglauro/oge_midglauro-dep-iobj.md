---
layout: base
title:  'Statistics of iobj in UD_Old_Georgian-MidGLauRo'
udver: '2'
---

## Treebank Statistics: UD_Old_Georgian-MidGLauRo: Relations: `iobj`

This relation is universal.

128 nodes (2%) are attached to their parents as `iobj`.

77 instances of `iobj` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.96875.

The following 7 pairs of parts of speech are connected with `iobj`: <tt><a href="oge_midglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_midglauro-pos-NOUN.html">NOUN</a></tt> (74; 58% instances), <tt><a href="oge_midglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_midglauro-pos-PRON.html">PRON</a></tt> (34; 27% instances), <tt><a href="oge_midglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_midglauro-pos-PROPN.html">PROPN</a></tt> (16; 13% instances), <tt><a href="oge_midglauro-pos-ADV.html">ADV</a></tt>-<tt><a href="oge_midglauro-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="oge_midglauro-pos-PRON.html">PRON</a></tt>-<tt><a href="oge_midglauro-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="oge_midglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_midglauro-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="oge_midglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_midglauro-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 iobj	color:blue
1	ჰკითხა	კითხვა	VERB	V_Act_Aor_S:3Sg_IO:3Sg	Mood=Ind|Number[io]=Sing|Number[subj]=Sing|Person[io]=3|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	Preverb=No
2	მოყვასსა	მოყვასი	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	1	iobj	_	SpaceAfter=No
3	:	:	PUNCT	Punct_Colon	_	4	punct	_	_
4	არს	ყოფა	VERB	V_Act_Pres_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin	1	ccomp	_	Preverb=No
5	ცა	ცა	PART	Part	_	4	advmod	_	_
6	ამის	ესე	PRON	Pron_Dem_Gen_Sg	Case=Gen|Number=Sing|PronType=Dem	8	nmod	_	_
7	ებრი	ებრ	ADP	Post	AdpType=Post|Case=Gen|Case[sauf]=Nom	6	case	_	_
8	კაცი	კაცი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	4	nsubj	_	_
9	ო	ო	PART	Part	Evident=Nfh	4	mark	_	_
10	?	?	PUNCT	Punct_Question	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 iobj	color:blue
1	ამაზედა	ამაზედა	ADV	Adv	_	2	advmod	_	_
2	შეუტივეს	შეტევა	VERB	V_Act_Aor_Pv_UV_S:3Pl_IO:3	Mood=Ind|Number[subj]=Plur|Person[io]=3|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	Preverb=Yes|Version=U
3	და	და	CCONJ	Cj_Coord	_	4	cc	_	_
4	სცეს	ცემა	VERB	V_Act_Aor_S:3Pl_IO:3	Mood=Ind|Number[subj]=Plur|Person[io]=3|Person[subj]=3|Tense=Past|VerbForm=Fin	2	conj	_	Preverb=No
5	ერთმან-ერთსა	ერთმან-ერთი	PRON	Pron_Rec_Dat_Sg	Case=Dat|Number=Sing|PronType=Rcp	4	iobj	_	SpaceAfter=No
6	.	.	PUNCT	Punct_FullStop	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	ესე	ესე	PRON	Pron_Dem_Nom_Sg	Case=Nom|Number=Sing|PronType=Dem	2	obj	_	_
2	ესმა	სმენა	VERB	V_Act_Aor_EV_S:3Sg_IO:3	Mood=Ind|Number[subj]=Sing|Person[io]=3|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	Preverb=No|Version=E
3	ამირან	ამირან	PROPN	N_Prop_Dat_Sg	Case=Dat|NameType=Prs|Number=Sing	2	iobj	_	_
4	დარეჯანის	დარეჯანი	PROPN	N_Prop_Gen_Sg	Case=Gen|NameType=Prs|Number=Sing	5	nmod	_	_
5	ძესა	ძე	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	3	appos	_	_
6	და	და	CCONJ	Cj_Coord	_	8	cc	_	_
7	ეგრე	ეგრე	ADV	Adv	_	8	advmod	_	_
8	მიბრძანა	ბრძანება	VERB	V_Act_Aor_IV_S:3Sg_IO:1Sg	Mood=Ind|Number[io]=Sing|Number[subj]=Sing|Person[io]=1|Person[subj]=3|Tense=Past|VerbForm=Fin	2	conj	_	SpaceAfter=No|Preverb=No|Version=I
9	:	:	PUNCT	Punct_Colon	_	10	punct	_	_
10	გესმის	სმენა	VERB	V_Act_Pres_EV_S:3Sg_IO:2	Mood=Ind|Number[subj]=Sing|Person[io]=2|Person[subj]=3|Tense=Pres|VerbForm=Fin	8	ccomp	_	Preverb=No|Version=E
11	ო	ო	PART	Part	Evident=Nfh	10	mark	_	_
12	?	?	PUNCT	Punct_Question	_	2	punct	_	_

~~~



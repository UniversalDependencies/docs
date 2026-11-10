---
layout: base
title:  'Statistics of cop in UD_Old_Georgian-MidGLauRo'
udver: '2'
---

## Treebank Statistics: UD_Old_Georgian-MidGLauRo: Relations: `cop`

This relation is universal.

71 nodes (1%) are attached to their parents as `cop`.

61 instances of `cop` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.29577464788732.

The following 6 pairs of parts of speech are connected with `cop`: <tt><a href="oge_midglauro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="oge_midglauro-pos-AUX.html">AUX</a></tt> (38; 54% instances), <tt><a href="oge_midglauro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="oge_midglauro-pos-AUX.html">AUX</a></tt> (22; 31% instances), <tt><a href="oge_midglauro-pos-PRON.html">PRON</a></tt>-<tt><a href="oge_midglauro-pos-AUX.html">AUX</a></tt> (6; 8% instances), <tt><a href="oge_midglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_midglauro-pos-AUX.html">AUX</a></tt> (3; 4% instances), <tt><a href="oge_midglauro-pos-ADV.html">ADV</a></tt>-<tt><a href="oge_midglauro-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="oge_midglauro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="oge_midglauro-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cop	color:blue
1	ესე	ესე	PRON	Pron_Dem_Nom_Sg	Case=Nom|Number=Sing|PronType=Dem	4	nsubj	_	_
2	იყო	ყოფა	AUX	V_Act_Aor_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	4	cop	_	_
3	პირველი	პირველი	NUM	A_Nom_Sg	Case=Nom|Number=Sing|NumType=Ord	4	amod	_	_
4	ომი	ომი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	0	root	_	_
5	ამბრისა	ამბრი	PROPN	N_Prop_Gen_Sg	Case=Gen|NameType=Prs|Number=Sing	4	nmod	_	SpaceAfter=No
6	.	.	PUNCT	Punct_FullStop	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 cop	color:blue
1	შეშინდა	შეშინება	VERB	V_Pass_Aor_Pv_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	Preverb=Yes
2	კაცი	კაცი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	1	nsubj	_	_
3	იგი	იგი	PRON	Pron_Dem_Nom_Sg	Case=Nom|Number=Sing|PronType=Dem	2	det	_	_
4	და	და	CCONJ	Cj_Coord	_	6	cc	_	_
5	ეგრე	ეგრე	ADV	Adv	_	6	advmod	_	_
6	თქვა	თქმა	VERB	V_Act_Aor_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	1	conj	_	SpaceAfter=No|Preverb=No
7	:	:	PUNCT	Punct_Colon	_	8	punct	_	_
8	მთრვალი	მთრვალი	ADJ	A_Nom_Sg	Case=Nom|Number=Sing	6	ccomp	_	_
9	ვიყავ	ყოფა	AUX	V_Act_Aor_S:1Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Past|VerbForm=Fin	8	cop	_	_
10	ო	ო	PART	Part	Evident=Nfh	8	mark	_	_
11	.	.	PUNCT	Punct_FullStop	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cop	color:blue
1	დასაბამს	დასაბამი	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	3	obl	_	_
2	აქეთ	აქეთ	ADV	Adv_Loc	_	1	advmod	_	_
3	შენი	შენი	PRON	Pron_Poss_2Sg_Nom_Sg	Case=Nom|Number=Sing|Person=2|Poss=Yes|PronType=Prs	0	root	_	_
4	ა	არის	AUX	V_Act_Pres_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
5	ის	ისი	PRON	Pron_Dem_Nom_Sg	Case=Nom|Number=Sing|PronType=Dem	6	det	_	_
6	ქვეყანა	ქვეყანა	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	3	nsubj	_	_
7	და	და	CCONJ	Cj_Coord	_	13	cc	_	_
8	არც	არც	ADV	Adv_Neg	Polarity=Neg	13	advmod	_	_
9	ვის	ვინ	PRON	Pron_Int_Gen_Sg	Case=Gen|Number=Sing|PronType=Int	13	obl	_	_
10	გან	გან	ADP	Post	AdpType=Post|Case=Gen	9	case	_	_
11	მას	იგი	PRON	Pron_Dem_Dat_Sg	Case=Dat|Number=Sing|PronType=Dem	13	iobj	_	_
12	რამ	რა	SCONJ	Cj_Sub	_	13	mark	_	_
13	დაკლებია	დაკლება	VERB	V_Pass_Perf_Pv_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pf|VerbForm=Fin	3	advcl	_	SpaceAfter=No|Preverb=Yes
14	.	.	PUNCT	Punct_FullStop	_	3	punct	_	_

~~~



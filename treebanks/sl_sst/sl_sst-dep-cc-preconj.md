---
layout: base
title:  'Statistics of cc:preconj in UD_Slovenian-SST'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SST: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="sl_sst-dep-cc.html">cc</a></tt>.

22 nodes (0%) are attached to their parents as `cc:preconj`.

21 instances of `cc:preconj` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.04545454545455.

The following 9 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-CCONJ.html">CCONJ</a></tt> (7; 32% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-CCONJ.html">CCONJ</a></tt> (5; 23% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-PART.html">PART</a></tt> (3; 14% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-ADV.html">ADV</a></tt> (2; 9% instances), <tt><a href="sl_sst-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_sst-pos-PART.html">PART</a></tt> (1; 5% instances), <tt><a href="sl_sst-pos-NUM.html">NUM</a></tt>-<tt><a href="sl_sst-pos-PART.html">PART</a></tt> (1; 5% instances), <tt><a href="sl_sst-pos-PRON.html">PRON</a></tt>-<tt><a href="sl_sst-pos-PART.html">PART</a></tt> (1; 5% instances), <tt><a href="sl_sst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_sst-pos-CCONJ.html">CCONJ</a></tt> (1; 5% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-PART.html">PART</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc:preconj	color:blue
1	j-	_	X	Xt	_	3	reparandum	_	pronunciation=j
2	[gap]	[gap]	PUNCT	X	_	3	punct	_	pronunciation=[gap]
3	ali	ali	CCONJ	Cc	_	4	cc:preconj	_	pronunciation=al
4	imate	imeti	VERB	Vmpr2p-n	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	pronunciation=imate
5	eee	eee	INTJ	I	_	7	discourse:filler	_	pronunciation=eee
6	eee	eee	INTJ	I	_	7	discourse:filler	_	pronunciation=eee
7	sekanca	sekanec	NOUN	Ncmsay	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	4	obj	_	pronunciation=sekanca
8	ali	ali	CCONJ	Cc	_	9	cc	_	pronunciation=ali
9	imate	imeti	VERB	Vmpr2p-n	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	conj	_	pronunciation=imate
10	eee	eee	INTJ	I	_	11	discourse:filler	_	pronunciation=eee
11	pelete	pelet	NOUN	Ncmpa	Case=Acc|Gender=Masc|Number=Plur	9	obj	_	pronunciation=pelete
12	ne	ne	PART	Q	Polarity=Neg	4	discourse	_	pronunciation=ne

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 22 cc:preconj	color:blue
1	no	no	PART	Q	_	7	discourse	_	pronunciation=no
2	pri	pri	ADP	Sl	Case=Loc	4	case	_	pronunciation=pr
3	eee	eee	INTJ	I	_	4	discourse:filler	_	pronunciation=eee
4	prispevku	prispevek	NOUN	Ncmsl	Case=Loc|Gender=Masc|Number=Sing	7	obl	_	pronunciation=prispevku
5	pri	pri	ADP	Sl	Case=Loc	6	case	_	pronunciation=pri
6	registraciji	registracija	NOUN	Ncfsl	Case=Loc|Gender=Fem|Number=Sing	4	nmod	_	pronunciation=registraciji
7	bi	biti	VERB	Va-c	Mood=Cnd|VerbForm=Fin	0	root	_	pronunciation=bi
8	[gap]	[gap]	PUNCT	X	_	11	punct	_	pronunciation=[gap]
9	za	za	ADP	Sa	Case=Acc	11	case	_	pronunciation=za
10	sto	sto	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	11	nummod	_	pronunciation=sto
11	evrov	evro	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	7	obl	_	pronunciation=evrov
12	in	in	CCONJ	Cc	_	13	cc	_	pronunciation=in
13	gotovo	gotovo	ADV	Rgp	Degree=Pos	7	conj	_	pronunciation=gotovo
14	pa	pa	CCONJ	Cc	_	15	reparandum	_	pronunciation=pa
15	pa	pa	CCONJ	Cc	_	18	cc	_	pronunciation=pa
16	ne	ne	PART	Q	Polarity=Neg	18	advmod	_	pronunciation=neb[split_1-2]
17	bi	biti	AUX	Va-c	Mood=Cnd|VerbForm=Fin	18	aux	_	pronunciation=neb[split_2-2]
18	bilo	biti	VERB	Va-p-sn	Gender=Neut|Number=Sing|VerbForm=Part	7	conj	_	pronunciation=blo
19	ne	ne	CCONJ	Cc	_	20	cc:preconj	_	pronunciation=ne
20	vinjet	vinjeta	NOUN	Ncfpg	Case=Gen|Gender=Fem|Number=Plur	18	nsubj	_	pronunciation=vinjet
21	pa	pa	CCONJ	Cc	_	23	cc	_	pronunciation=pa
22	ne	ne	CCONJ	Cc	_	23	cc:preconj	_	pronunciation=ne
23	kontrole	kontrola	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	20	conj	_	pronunciation=kontrole
24	na	na	ADP	Sl	Case=Loc	25	case	_	pronunciation=na
25	cesti	cesta	NOUN	Ncfsl	Case=Loc|Gender=Fem|Number=Sing	23	nmod	_	pronunciation=cesti
26	pa	pa	CCONJ	Cc	_	27	cc	_	pronunciation=pa
27	razmetavanja	razmetavanje	NOUN	Ncnsg	Case=Gen|Gender=Neut|Number=Sing	20	conj	_	pronunciation=razmetavanja
28	za	za	ADP	Sa	Case=Acc	30	case	_	pronunciation=za
29	take	tak	DET	Pd-fpa	Case=Acc|Gender=Fem|Number=Plur|PronType=Dem	30	det	_	pronunciation=take
30	neumnosti	neumnost	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	27	nmod	_	pronunciation=neumnosti

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 cc:preconj	color:blue
1	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	8	nsubj	_	pronunciation=to
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	cop	_	pronunciation=je
3	pa	pa	CCONJ	Cc	_	8	advmod	_	pronunciation=pa
4	res	res	ADV	Rgp	Degree=Pos	8	advmod	_	pronunciation=res
5	fenomenalna	fenomenalen	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	pronunciation=fenomenalna
6	ne	ne	PART	Q	Polarity=Neg	8	cc:preconj	_	pronunciation=ne
7	samo	samo	PART	Q	_	6	fixed	_	pronunciation=samo
8	žurka	žurka	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	pronunciation=žurka
9	ampak	ampak	CCONJ	Cc	_	11	cc	_	pronunciation=ampak
10	nasploh	nasploh	ADV	Rgp	Degree=Pos	11	advmod	_	pronunciation=nasploh
11	spektakel	spektakel	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	8	conj	_	pronunciation=spektakel

~~~



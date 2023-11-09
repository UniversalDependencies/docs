---
layout: base
title:  'Statistics of acl:relcl in UD_Low_Saxon-LSDC'
udver: '2'
---

## Treebank Statistics: UD_Low_Saxon-LSDC: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="nds_lsdc-dep-acl.html">acl</a></tt>.

14 nodes (0%) are attached to their parents as `acl:relcl`.

14 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.92857142857143.

The following 5 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (9; 64% instances), <tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (2; 14% instances), <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt> (1; 7% instances), <tt><a href="nds_lsdc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 acl:relcl	color:blue
1	De	de	DET	_	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	2	det	_	lemma_gml=dê
2	wöörde	woord	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	11	dislocated	_	lemma_gml=wōrt|SpaceAfter=No
3	,	,	PUNCT	_	_	7	punct	_	_
4	dee	dee	PRON	_	Case=Acc|Number=Plur|PronType=Rel	7	obj	_	lemma_gml=dê
5	ik	ik	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	lemma_gml=ik
6	juw	jy	PRON	_	Case=Acc,Dat|Number=Plur|Person=2|PronType=Prs	7	iobj	_	lemma_gml=gî
7	segge	seggen	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres	2	acl:relcl	_	lemma_gml=seggen|SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	_
9	dee	dê	PRON	_	Case=Nom|Number=Plur|PronType=Dem	11	nsubj	_	lemma_gml=dê
10	sint	weasen	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres	11	cop	_	lemma_gml=wēsen
11	geyst	geyst	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	lemma_gml=gêist
12	un	un	CCONJ	_	_	13	cc	_	lemma_gml=unde
13	liaven	leaven	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	11	conj	_	lemma_gml=lēvent|SpaceAfter=No
14	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 acl:relcl	color:blue
1	Syn	syn	DET	_	Case=Nom|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs	2	det	_	lemma_gml=sîn,ēr,sîn
2	erbarmen	erbarmen	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	3	nsubj	_	lemma_gml=erbarment
3	geyt	gån	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	lemma_gml=gân
4	van	van	ADP	_	AdpType=Prep	5	case	_	lemma_gml=van
5	geslächt	geslächte	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	3	obl	_	lemma_gml=geslechte
6	to	to	ADP	_	AdpType=Prep	7	case	_	lemma_gml=tô
7	geslächt	geslächte	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	3	obl	_	lemma_gml=geslechte
8	by	by	ADP	_	AdpType=Prep	9	case	_	lemma_gml=bî
9	allen	alle	PRON	_	Case=Dat|Number=Plur|PronType=Tot	3	obl	_	lemma_gml=al|SpaceAfter=No
10	,	,	PUNCT	_	_	13	punct	_	_
11	dee	dee	PRON	_	Case=Nom|Number=Plur|PronType=Rel	13	nsubj	_	lemma_gml=dê
12	en	hee	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	obj	_	lemma_gml=hê
13	vürchtet	vrüchten	VERB	_	Mood=Ind|Number=Plur|Person=3	9	acl:relcl	_	lemma_gml=vrüchten|SpaceAfter=No
14	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 acl:relcl	color:blue
1	Tosamen	tosamen	ADV	_	_	2	advmod	_	lemma_gml=tôsāmen
2	atten	eaten	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	lemma_gml=ēten
3	see	see	PRON	_	Case=Acc|Number=Plur|Person=3|PronType=Prs	2	nsubj	_	lemma_gml=sê
4	van	van	ADP	_	AdpType=Prep	7	case	_	lemma_gml=van
5	de	de	DET	_	Case=Acc,Dat|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	7	det	_	lemma_gml=dê
6	lekkere	lekker	ADJ	_	Case=Acc,Dat|Degree=Pos|Gender=Neut|Number=Plur	7	amod	_	lemma_gml=lecker
7	dinge	ding	NOUN	_	Case=Acc,Dat|Gender=Neut|Number=Plur	2	obl	_	lemma_gml=dinc|SpaceAfter=No
8	,	,	PUNCT	_	_	12	punct	_	_
9	dee	dee	PRON	_	Case=Nom|Number=Plur|PronType=Rel	12	nsubj	_	lemma_gml=dê
10	wyders	wyder	ADV	_	_	12	advmod	_	lemma_gml=wît
11	sou	sou	ADV	_	_	12	advmod	_	lemma_gml=sô
12	betüün	betuun	ADJ	_	Degree=Pos	7	acl:relcl	_	lemma_gml=betûn
13	wassen	weasen	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	12	cop	_	lemma_gml=wēsen|SpaceAfter=No
14	.	.	PUNCT	_	_	2	punct	_	_

~~~



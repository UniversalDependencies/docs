---
layout: base
title:  'Statistics of amod in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Relations: `amod`

This relation is universal.

6116 nodes (6%) are attached to their parents as `amod`.

6087 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17903858731197.

The following 12 pairs of parts of speech are connected with `amod`: <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (6020; 98% instances), <tt><a href="sv_talbanken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (31; 1% instances), <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (28; 0% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (15; 0% instances), <tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (10; 0% instances), <tt><a href="sv_talbanken-pos-NUM.html">NUM</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="sv_talbanken-pos-INTJ.html">INTJ</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 amod	color:blue
1	Vad	vad	PRON	HP|NEU|SIN|IND	Definite=Ind|Number=Sing|PronType=Int	2	obj	2:obj	_
2	skapar	skapa	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Cxn=Interrogative-Polar-Direct|CxnElt=2:Interrogative-Polar-Direct.Clause
3	den	den	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|PronType=Art	5	det	5:det	_
4	kollektiva	kollektiv	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos	5	amod	5:amod	_
5	barnuppfostran	barnuppfostran	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	nsubj	2:nsubj	_
6	för	för	ADP	PP	_	8	case	8:case	_
7	slags	slag	NOUN	NN|NEU|SIN|IND|GEN	Case=Gen|Definite=Ind|Gender=Neut|Number=Sing	8	nmod:poss	8:nmod:poss	_
8	människor	människa	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	1	nmod	1:nmod:för	SpaceAfter=No
9	?	?	PUNCT	MAD	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 amod	color:blue
1	Om	om	SCONJ	SN	_	5	mark	5:mark	_
2	basbeloppet	basbelopp	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	5	nsubj	5:nsubj	_
3	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
4	6900	6900	NUM	RG|NOM	Case=Nom|NumType=Card	5	nummod	5:nummod	_
5	kr	krona	NOUN	NN|AN	Abbr=Yes	7	advcl	7:advcl:om	CxnElt=7:Conditional-Marker.Protasis|SpaceAfter=No
6	,	,	PUNCT	MID	_	7	punct	7:punct	_
7	blir	bli	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Cxn=Conditional-Marker|CxnElt=7:Conditional-Marker.Apodosis
8	full	full	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	9	amod	9:amod	_
9	ATP	ATP	PROPN	PM|NOM	Case=Nom	7	nsubj	7:nsubj|12:nsubj	_
10	av	av	ADP	PP	_	12	mark	12:mark	_
11	följande	följande	ADJ	PC|PRS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Tense=Pres|VerbForm=Part	12	amod	12:amod	_
12	storlek	storlek	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	7	xcomp	7:xcomp	SpaceAfter=No
13	:	:	PUNCT	MAD	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 amod	color:blue
1	Vi	vi	PRON	PN|UTR|PLU|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	2	nsubj	2:nsubj	_
2	upplever	uppleva	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	i	i	ADP	PP	_	4	case	4:case	_
4	dag	dag	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obl	2:obl:i	_
5	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	6	det	6:det	_
6	rotlöshet	rotlöshet	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obj	2:obj	_
7	och	och	CCONJ	KN	_	8	cc	8:cc	_
8	rådvillhet	rådvillhet	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	6	conj	2:obj|6:conj:och	_
9	hos	hos	ADP	PP	_	11	case	11:case	_
10	många	många	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos	11	amod	11:amod	_
11	unga	ung	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	8	nmod	8:nmod:hos	SpaceAfter=No
12	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~



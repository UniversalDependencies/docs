---
layout: base
title:  'Statistics of amod in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `amod`

This relation is universal.

1235 nodes (6%) are attached to their parents as `amod`.

1230 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14817813765182.

The following 16 pairs of parts of speech are connected with `amod`: <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (1160; 94% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (41; 3% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	De	den	DET	DT|NEU|PLU|DEF	Definite=Def|Gender=Neut|Number=Plur	3	det	3:det	_
2	nya	ny	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	3	amod	3:amod	_
3	utgifterna	utgift	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	4	nsubj:pass	4:nsubj:pass	_
4	finansieras	finansiera	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	0:root	_
5	av	av	ADP	PP	_	8	case	8:case	_
6	Clintons	Clinton	PROPN	PM|GEN	Case=Gen	8	nmod:poss	8:nmod:poss	_
7	stora	stor	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	8	amod	8:amod	_
8	bankkonto	bankkonto	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	4	obl:agent	4:obl:agent	SpaceAfter=No
9	.	.	PUNCT	MAD	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 amod	color:blue
1	Trots	trots	ADP	PP	_	2	case	2:case	_
2	detta	detta	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	3	obl	3:obl:trots	_
3	verkar	verka	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	de	de	PRON	PN|UTR/NEU|PLU|DEF|SUB	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	3	nsubj	3:nsubj|7:nsubj	_
5	båda	båda	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	3	acl	3:acl	_
6	ha	ha	AUX	VB|INF|AKT	VerbForm=Inf|Voice=Act	7	aux	7:aux	_
7	hållit	hålla	VERB	VB|SUP|AKT	VerbForm=Sup|Voice=Act	3	xcomp	3:xcomp	_
8	åtminstone	åtminstone	ADV	AB	_	7	advmod	7:advmod	_
9	delar	del	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	7	obj	7:obj	_
10	av	av	ADP	PP	_	12	case	12:case	_
11	Nedre	nedre	ADJ	JJ|KOM|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Cmp	12	amod	12:amod	_
12	Egypten	Egypten	PROPN	PM|NOM	Case=Nom	9	nmod	9:nmod:av	SpaceAfter=No
13	.	.	PUNCT	MAD	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 amod	color:blue
1	I	i	ADP	PP	_	3	advmod	3:advmod	_
2	morse	morse	NOUN	NN|-|-|-|-	_	1	fixed	1:fixed	_
3	mötte	möta	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	Påve	påve	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	nmod	5:nmod	_
5	Franciskus	Franciskus	PROPN	PM|NOM	Case=Nom	3	nsubj	3:nsubj	_
6	Mark	Mark	PROPN	PM|NOM	Case=Nom	3	obj	3:obj	_
7	Zuckerberg	Zuckerberg	PROPN	PM|NOM	Case=Nom	6	flat:name	6:flat:name	_
8	och	och	CCONJ	KN	_	10	cc	10:cc	_
9	hans	hans	PRON	PS|UTR/NEU|SIN/PLU|DEF	Definite=Def|Poss=Yes	10	nmod:poss	10:nmod:poss	_
10	fru	fru	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	6	conj	3:obj|6:conj:och	_
11	vid	vid	ADP	PP	_	12	case	12:case	_
12	Casa	Casa	PROPN	PM|NOM	Case=Nom	3	obl	3:obl:vid	_
13	Santa	Santa	PROPN	PM|NOM	Case=Nom	14	amod	14:amod	_
14	Marta	Marta	PROPN	PM|NOM	Case=Nom	12	nmod	12:nmod	SpaceAfter=No
15	.	.	PUNCT	MAD	_	3	punct	3:punct	_

~~~



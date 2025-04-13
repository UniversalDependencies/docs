---
layout: base
title:  'Statistics of obj in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Relations: `obj`

This relation is universal.

4272 nodes (4%) are attached to their parents as `obj`.

4037 instances of `obj` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.25936329588015.

The following 17 pairs of parts of speech are connected with `obj`: <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (3382; 79% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt> (719; 17% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (52; 1% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt> (34; 1% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-PROPN.html">PROPN</a></tt> (33; 1% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-NUM.html">NUM</a></tt> (19; 0% instances), <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (13; 0% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-INTJ.html">INTJ</a></tt> (3; 0% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sv_talbanken-pos-NUM.html">NUM</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obj	color:blue
1	'	'	PUNCT	PAD	_	4	punct	4:punct	SpaceAfter=No
2	Du	du	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	4	nsubj	4:nsubj	_
3	skall	skola	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
4	lyda	lyda	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	0:root	_
5	din	du	PRON	PS|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	6	nmod:poss	6:nmod:poss	_
6	fader	far	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	obj	4:obj	SpaceAfter=No
7	.	.	PUNCT	MAD	_	4	punct	4:punct	SpaceAfter=No
8	'	'	PUNCT	PAD	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obj	color:blue
1	Vad	vad	PRON	HP|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Int	2	obj	2:obj	_
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obj	color:blue
1	Olika	olik	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos	2	amod	2:amod	_
2	människor	människa	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	3	nsubj	3:nsubj	_
3	har	ha	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	olika	olika	ADV	AB	_	5	advmod	5:advmod	_
5	lätt	lätt	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Number=Sing	3	obj	3:obj	_
6	att	att	PART	IE	_	7	mark	7:mark	_
7	utstå	utstå	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	3	advcl	3:advcl:att	_
8	sådana	sån	PRON	PN|UTR/NEU|PLU|IND|SUB/OBJ	Definite=Ind|Number=Plur|PronType=Ind	7	obj	7:obj	SpaceAfter=No
9	.	.	PUNCT	MAD	_	3	punct	3:punct	_

~~~



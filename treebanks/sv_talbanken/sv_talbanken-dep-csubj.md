---
layout: base
title:  'Statistics of csubj in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="sv_talbanken-dep-csubj-pass.html">csubj:pass</a></tt>.

340 nodes (0%) are attached to their parents as `csubj`.

285 instances of `csubj` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.83235294117647.

The following 13 pairs of parts of speech are connected with `csubj`: <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (147; 43% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (104; 31% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (55; 16% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (9; 3% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (7; 2% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_talbanken-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 csubj	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	4	expl	4:expl	_
2	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
3	ju	ju	ADV	AB	_	4	advmod	4:advmod	_
4	klart	klar	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	0:root	_
5	att	att	SCONJ	SN	_	8	mark	8:mark	_
6	man	man	PRON	PN|UTR|SIN|IND|SUB	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	8	nsubj	8:nsubj	_
7	får	få	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	8:aux	_
8	gno	gno	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	4	csubj	4:csubj	_
9	hela	hel	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	10	amod	10:amod	_
10	tiden	tid	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	8	obl	8:obl	SpaceAfter=No
11	.	.	PUNCT	MAD	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 csubj	color:blue
1	Att	att	PART	IE	_	2	mark	2:mark	_
2	anställa	anställa	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	7	csubj	7:csubj	_
3	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	5	det	5:det	_
4	'	'	PUNCT	PAD	_	5	punct	5:punct	SpaceAfter=No
5	praktikant	praktikant	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obj	2:obj	SpaceAfter=No
6	'	'	PUNCT	PAD	_	5	punct	5:punct	_
7	lönar	löna	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	sig	sig	PRON	PN|UTR/NEU|SIN/PLU|DEF|OBJ	Case=Acc|Definite=Def|PronType=Prs	7	obj	7:obj	_
9	verkligen	verkligen	ADV	AB	_	7	advmod	7:advmod	_
10	inte	inte	PART	AB	Polarity=Neg	7	advmod	7:advmod	SpaceAfter=No
11	.	.	PUNCT	MAD	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj	color:blue
1	Ett	en	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	3	det	3:det	_
2	annat	annan	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	3	amod	3:amod	_
3	problem	problem	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	0	root	0:root	_
4	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
5	att	att	SCONJ	SN	_	7	mark	7:mark	_
6	u-landsbarnen	u-landsbarn	NOUN	NN|NEU|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Plur	7	nsubj	7:nsubj	_
7	får	få	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj	3:csubj	_
8	fel	fel	ADJ	JJ|POS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Pos	9	amod	9:amod	_
9	utbildning	utbildning	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	7	obj	7:obj	SpaceAfter=No
10	.	.	PUNCT	MAD	_	3	punct	3:punct	_

~~~



---
layout: base
title:  'Statistics of cc in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `cc`

This relation is universal.

408 nodes (5%) are attached to their parents as `cc`.

408 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.20588235294118.

The following 11 pairs of parts of speech are connected with `cc`: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-CCONJ.html">CCONJ</a></tt> (215; 53% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-CCONJ.html">CCONJ</a></tt> (109; 27% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-CCONJ.html">CCONJ</a></tt> (47; 12% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-CCONJ.html">CCONJ</a></tt> (14; 3% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-CCONJ.html">CCONJ</a></tt> (11; 3% instances), <tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_swell-pos-CCONJ.html">CCONJ</a></tt> (6; 1% instances), <tt><a href="sv_swell-pos-PART.html">PART</a></tt>-<tt><a href="sv_swell-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="sv_swell-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_swell-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_swell-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-DET.html">DET</a></tt>-<tt><a href="sv_swell-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-NUM.html">NUM</a></tt>-<tt><a href="sv_swell-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc	color:blue
1	Och	och	CCONJ	_	_	3	cc	_	_
2	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	3	nsubj	_	_
3	håller	hålla	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	med	med	ADP	_	_	3	compound:prt	_	_
5	om	om	ADP	_	_	6	case	_	_
6	det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	3	obl	_	_
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	Jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	nsubj	_	_
2	brukar	bruka	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	gå	gå	VERB	_	VerbForm=Inf|Voice=Act	2	xcomp	_	_
4	dit	dit	ADV	_	_	3	advmod	_	_
5	varje	varje	DET	_	Definite=Ind|Number=Sing|PronType=Tot	6	det	_	_
6	tisdag	tisdag	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	3	obl	_	_
7	och	och	CCONJ	_	_	8	cc	_	_
8	onsdag	onsdag	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	6	conj	_	_
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
1	Men	men	CCONJ	_	_	4	cc	_	_
2	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	4	nsubj	_	_
4	sannolikt	sannolik	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
5	?	?	PUNCT	_	_	4	punct	_	_

~~~



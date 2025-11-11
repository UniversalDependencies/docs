---
layout: base
title:  'Statistics of nmod in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="sv_swell-dep-nmod-poss.html">nmod:poss</a></tt>.

182 nodes (2%) are attached to their parents as `nmod`.

168 instances of `nmod` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.43956043956044.

The following 16 pairs of parts of speech are connected with `nmod`: <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (120; 66% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (16; 9% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt> (13; 7% instances), <tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt> (9; 5% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (7; 4% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (5; 3% instances), <tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="sv_swell-pos-NUM.html">NUM</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_swell-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nmod	color:blue
1	Tack	tack	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
2	för	för	ADP	_	_	4	case	_	_
3	din	du	PRON	_	Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	4	nmod:poss	_	_
4	hjälp	hjälp	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	1	nmod	_	_
5	i	i	ADP	_	_	6	case	_	_
6	framtiden	framtid	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing	4	nmod	_	_
7	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 nmod	color:blue
1	Nu	nu	ADV	_	_	4	advmod	_	_
2	ska	skola	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
3	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	4	nsubj	_	_
4	berätta	berätta	VERB	_	VerbForm=Inf|Voice=Act	0	root	_	_
5	om	om	ADP	_	_	8	case	_	_
6	den	den	DET	_	Definite=Def|Gender=Com|Number=Sing|PronType=Art	8	det	_	_
7	viktigaste	viktig	ADJ	_	Case=Nom|Definite=Def|Degree=Sup	8	amod	_	_
8	platsen	plats	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing	4	obl	_	_
9	för	för	ADP	_	_	10	case	_	_
10	mig	jag	PRON	_	Case=Acc|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	8	nmod	_	_
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nmod	color:blue
1	Det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	5	nsubj	_	_
2	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
3	en	en	DET	_	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	5	det	_	_
4	stor	stor	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	5	amod	_	_
5	plats	plats	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
6	i	i	ADP	_	_	7	case	_	_
7	Sudan	Sudan	PROPN	_	Case=Nom	5	nmod	_	_
8	.	.	PUNCT	_	_	5	punct	_	_

~~~



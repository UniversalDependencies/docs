---
layout: base
title:  'Statistics of orphan in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `orphan`

This relation is universal.

51 nodes (0%) are attached to their parents as `orphan`.

43 instances of `orphan` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.07843137254902.

The following 15 pairs of parts of speech are connected with `orphan`: <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (21; 41% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (5; 10% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (4; 8% instances), <tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (4; 8% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (3; 6% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-PART.html">PART</a></tt> (2; 4% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-ADV.html">ADV</a></tt> (2; 4% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-X.html">X</a></tt> (1; 2% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 orphan	color:blue
1	Ein	ein	DET	ART	_	2	det	_	_
2	Kommandowort	Kommandowort	NOUN	NN	_	3	nsubj	_	_
3	bewegt	bewegen	VERB	VVFIN	_	0	root	_	_
4	Armeen	Armee	NOUN	NN	_	3	obj	_	SpaceAfter=No
5	;	--	PUNCT	$,	_	7	punct	_	_
6	das	der	DET	ART	_	7	det	_	_
7	Wort	Wort	NOUN	NN	_	3	parataxis	_	_
8	Freyheit	Freyheit	NOUN	NN	_	7	appos	_	_
9	Nazionen	Nation	NOUN	NN	_	7	orphan	_	SpaceAfter=No
10	.	--	PUNCT	$.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 orphan	color:blue
1	Einer	einer	PRON	PIS	_	2	nsubj	_	_
2	hat	haben	AUX	VAFIN	_	0	root	_	_
3	mehr	mehr	DET	PIAT	_	4	det	_	_
4	Sinn	Sinn	NOUN	NN	_	2	obj	_	SpaceAfter=No
5	,	--	PUNCT	$,	_	7	punct	_	_
6	der	der	PRON	PRELS	_	7	nsubj	_	_
7	andere	anderer	PRON	PIS	_	2	parataxis	_	_
8	mehr	mehr	DET	PIAT	_	9	advmod	_	_
9	Verstand	Verstand	NOUN	NN	_	7	orphan	_	_
10	für	für	ADP	APPR	_	11	case	_	_
11	dieselbe	derselbe	DET	PDAT	_	7	orphan	_	SpaceAfter=No
12	.	--	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 orphan	color:blue
1	Der	der	DET	ART	_	2	det	_	_
2	Dichter	Dichter	NOUN	NN	_	13	nsubj	_	_
3	kann	können	VERB	VMFIN	_	13	aux	_	_
4	wenig	wenig	ADV	ADV	_	13	advmod	_	_
5	vom	von	ADP	APPRART	_	6	case	_	_
6	Philosophen	Philosoph	NOUN	NN	_	13	obl	_	SpaceAfter=No
7	,	--	PUNCT	$,	_	13	punct	_	_
8	dieser	dieser	PRON	PDS	_	13	conj	_	_
9	aber	aber	ADV	ADV	_	8	orphan	_	_
10	viel	viel	PRON	PIS	_	8	orphan	_	_
11	von	von	ADP	APPR	_	12	case	_	_
12	ihm	ihm	PRON	PPER	_	8	orphan	_	_
13	lernen	lernen	VERB	VVINF	_	0	root	_	SpaceAfter=No
14	.	--	PUNCT	$.	_	13	punct	_	_

~~~



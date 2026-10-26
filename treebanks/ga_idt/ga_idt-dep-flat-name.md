---
layout: base
title:  'Statistics of flat:name in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="ga_idt-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="ga_idt-dep-flat-foreign.html">flat:foreign</a></tt>.

757 nodes (1%) are attached to their parents as `flat:name`.

757 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.36063408190225.

The following 13 pairs of parts of speech are connected with `flat:name`: <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (466; 62% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (164; 22% instances), <tt><a href="ga_idt-pos-PART.html">PART</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (48; 6% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (47; 6% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (15; 2% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:name	color:blue
1	Thuig	tuig	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	Mary	Mary	PROPN	Noun	Definite=Def|Gender=Fem|Number=Sing	1	nsubj	_	NamedEntity=Yes
3	Harney	Harney	PROPN	Noun	Definite=Def|Gender=Masc|Number=Sing	2	flat:name	_	NamedEntity=Yes
4	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	1	obj	_	_
5	seo	seo	PRON	Dem	PronType=Dem	2	det	_	_
6	go	go	PART	Ad	PartType=Ad	7	mark:prt	_	_
7	breá	breá	ADJ	Adj	Degree=Pos	1	advmod	_	SpaceAfter=No
8	,	,	PUNCT	Punct	_	9	punct	_	_
9	agus	agus	CCONJ	Coord	_	10	cc	_	_
10	Charlie	Charlie	PROPN	Noun	Definite=Def|Gender=Masc|Number=Sing	2	conj	_	NamedEntity=Yes
11	McCreevy	McCreevy	PROPN	Noun	Definite=Def|Gender=Masc|Number=Sing	10	flat:name	_	NamedEntity=Yes|SpaceAfter=No
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	Grianghraif	grianghraf	NOUN	Noun	Case=Nom|Gender=Masc|Number=Plur	0	root	_	_
2	le	le	ADP	Simp	_	3	case	_	_
3	Maidhc	Maidhc	PROPN	Noun	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	nmod	_	NamedEntity=Yes
4	Ó	ó	PART	Pat	PartType=Pat	3	flat:name	_	NamedEntity=Yes
5	Seachnasaí	Seachnasaí	PROPN	Noun	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	3	flat:name	_	NamedEntity=Yes|SpaceAfter=No
6	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	Ó	ó	PART	Pat	PartType=Pat	0	root	_	NamedEntity=Yes
2	Dubhurthuile	Dubhurthuile	PROPN	Noun	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	flat:name	_	NamedEntity=Yes
3	a	a	PART	Inf	PartType=Inf	4	mark	_	_
4	bheith	bheith	NOUN	Noun	Form=Len|VerbForm=Inf	1	xcomp	_	_
5	mar	mar	ADP	Simp	_	6	case	_	_
6	Phátrún	pátrún	NOUN	Noun	Case=Nom|Form=Len|Gender=Masc|Number=Sing	4	xcomp:pred	_	_
7	ar	ar	ADP	Simp	_	9	case	_	_
8	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	9	det	_	_
9	gCraobh	craobh	NOUN	Noun	Case=Nom|Definite=Def|Form=Ecl|Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	1	punct	_	_

~~~



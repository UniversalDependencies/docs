---
layout: base
title:  'Statistics of flat:name in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="ga_idt-dep-flat.html">flat</a></tt>.

178 nodes (1%) are attached to their parents as `flat:name`.

178 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.37078651685393.

The following 16 pairs of parts of speech are connected with `flat:name`: <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (87; 49% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (39; 22% instances), <tt><a href="ga_idt-pos-PART.html">PART</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (13; 7% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (11; 6% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (9; 5% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-X.html">X</a></tt> (4; 2% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	Plunket	Plunket	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
2	Greene	Greene	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	flat:name	_	SpaceAfter=No
3	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	Grianghraif	grianghraf	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	0	root	_	_
2	le	le	ADP	Simp	_	3	case	_	_
3	Maidhc	Maidhc	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	nmod	_	_
4	Ó	ó	PART	Pat	PartType=Pat	3	flat:name	_	_
5	Seachnasaí	seachnasaí	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	3	flat:name	_	SpaceAfter=No
6	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	Ó	ó	PART	Pat	PartType=Pat	0	root	_	_
2	Dubhurthuile	dubhurthuile	PROPN	Noun	Case=NomAcc|Gender=Masc	1	flat:name	_	_
3	a	a	PART	Inf	PartType=Inf	4	mark	_	_
4	bheith	bheith	NOUN	Noun	Form=Len|VerbForm=Inf	1	xcomp	_	_
5	mar	mar	ADP	Simp	_	6	case	_	_
6	Phátrún	pátrún	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	4	nmod	_	_
7	ar	ar	ADP	Simp	_	9	case	_	_
8	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	9	det	_	_
9	gCraobh	craobh	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	1	punct	_	_

~~~



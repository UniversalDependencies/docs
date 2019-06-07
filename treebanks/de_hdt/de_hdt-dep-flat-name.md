---
layout: base
title:  'Statistics of flat:name in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="de_hdt-dep-flat.html">flat</a></tt>.

9703 nodes (2%) are attached to their parents as `flat:name`.

9703 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25672472431207.

The following 5 pairs of parts of speech are connected with `flat:name`: <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt> (6420; 66% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt> (2885; 30% instances), <tt><a href="de_hdt-pos-X.html">X</a></tt>-<tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt> (393; 4% instances), <tt><a href="de_hdt-pos-NUM.html">NUM</a></tt>-<tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="de_hdt-pos-PRON.html">PRON</a></tt>-<tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	Mobilcom-Chef	Chef	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	nsubj	_	_
2	Gerhard	Gerhard	PROPN	NE	Number=Sing|Person=3	1	flat:name	_	_
3	Schmid	Schmid	PROPN	NE	Number=Sing|Person=3	1	flat:name	_	_
4	sagte	sagen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
5	dem	dem	DET	ART	Case=Dat|Gender=Masc|Number=Sing	6	det	_	_
6	Spiegel	Spiegel	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	4	obj	_	_
7	:	:	PUNCT	$.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:name	color:blue
1	(	(	PUNCT	$(	_	2	punct	_	_
2	Christiane	Christiane	PROPN	NE	Number=Sing|Person=3	0	root	_	_
3	Schulzki-Haddouti	Schulzki-Haddouti	PROPN	NE	Person=3	2	flat:name	_	_
4	)	)	PUNCT	$(	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	Abrechnungspanne	Spanne	NOUN	NN	Gender=Fem|Number=Sing|Person=3	0	root	_	_
2	bei	bei	ADP	APPR	Case=Dat	3	case	_	_
3	01051	01051	X	FM	Person=3	1	nmod	_	_
4	Telecom	Telecom	PROPN	NE	Gender=Fem|Number=Sing|Person=3	3	flat:name	_	_

~~~



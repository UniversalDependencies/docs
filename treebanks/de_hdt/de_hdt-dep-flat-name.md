---
layout: base
title:  'Statistics of flat:name in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="de_hdt-dep-flat.html">flat</a></tt>.

55475 nodes (2%) are attached to their parents as `flat:name`.

55475 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25317710680487.

The following 5 pairs of parts of speech are connected with `flat:name`: <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt> (35958; 65% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt> (17180; 31% instances), <tt><a href="de_hdt-pos-X.html">X</a></tt>-<tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt> (2297; 4% instances), <tt><a href="de_hdt-pos-NUM.html">NUM</a></tt>-<tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt> (32; 0% instances), <tt><a href="de_hdt-pos-PRON.html">PRON</a></tt>-<tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt> (8; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	Mobilcom-Chef	Chef	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	nsubj	_	_
2	Gerhard	Gerhard	PROPN	NE	Number=Sing|Person=3	1	flat:name	_	_
3	Schmid	Schmid	PROPN	NE	Number=Sing|Person=3	1	flat:name	_	_
4	sagte	sagen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	dem	dem	DET	ART	Case=Dat|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	Spiegel	Spiegel	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	4	obj	_	_
7	:	:	PUNCT	$.	PunctType=Peri	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:name	color:blue
1	(	(	PUNCT	$(	PunctType=Brck	2	punct	_	_
2	Christiane	Christiane	PROPN	NE	Number=Sing|Person=3	0	root	_	_
3	Schulzki-Haddouti	Schulzki-Haddouti	PROPN	NE	Person=3	2	flat:name	_	_
4	)	)	PUNCT	$(	PunctType=Brck	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	Abrechnungspanne	Spanne	NOUN	NN	Gender=Fem|Number=Sing|Person=3	0	root	_	_
2	bei	bei	ADP	APPR	AdpType=Prep|Case=Dat	3	case	_	_
3	01051	01051	X	FM	Foreign=Yes|Person=3	1	nmod	_	_
4	Telecom	Telecom	PROPN	NE	Gender=Fem|Number=Sing|Person=3	3	flat:name	_	_

~~~



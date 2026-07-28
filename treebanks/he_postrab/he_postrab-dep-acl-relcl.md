---
layout: base
title:  'Statistics of acl:relcl in UD_Hebrew-PostRab'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-PostRab: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="he_postrab-dep-acl.html">acl</a></tt>.

186 nodes (2%) are attached to their parents as `acl:relcl`.

186 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.48924731182796.

The following 20 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-VERB.html">VERB</a></tt> (92; 49% instances), <tt><a href="he_postrab-pos-PRON.html">PRON</a></tt>-<tt><a href="he_postrab-pos-VERB.html">VERB</a></tt> (26; 14% instances), <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt> (20; 11% instances), <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-ADJ.html">ADJ</a></tt> (18; 10% instances), <tt><a href="he_postrab-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_postrab-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="he_postrab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_postrab-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="he_postrab-pos-PRON.html">PRON</a></tt>-<tt><a href="he_postrab-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="he_postrab-pos-ADV.html">ADV</a></tt>-<tt><a href="he_postrab-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="he_postrab-pos-DET.html">DET</a></tt>-<tt><a href="he_postrab-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="he_postrab-pos-PRON.html">PRON</a></tt>-<tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="he_postrab-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="he_postrab-pos-NUM.html">NUM</a></tt>-<tt><a href="he_postrab-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="he_postrab-pos-PRON.html">PRON</a></tt>-<tt><a href="he_postrab-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 acl:relcl	color:blue
1	אין	אין	VERB	VERB	_	0	root	_	_
2	לסמוך	סמך	VERB	VERB	VerbForm=Inf	1	csubj	_	_
3	לומר	אמר	VERB	VERB	VerbForm=Inf	2	xcomp	_	_
4	עלי	על	ADP	ADP	_	5	case	_	_
5	הם	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=3	3	obl	_	_
6	דין	דין	NOUN	NOUN	Gender=Masc|Number=Sing	3	obj	_	_
7	מעיין	מעיין	NOUN	NOUN	Gender=Masc|Number=Sing	6	compound:smixut	_	_
8	ב	ב	ADP	ADP	_	9	case	_	_
9	מקום	מקום	NOUN	NOUN	Gender=Masc|Number=Sing	3	obl	_	_
10	ה	ה	SCONJ	SCONJ	_	11	mark	_	_
11	נוגע	נגע	VERB	VERB	Gender=Masc|Number=Sing|Person=1,2,3|VerbForm=Part	9	acl:relcl	_	_
12	ל	ל	ADP	ADP	_	13	case	_	_
13	קולא	קולא	NOUN	NOUN	Gender=Masc|Number=Sing	11	obl	_	_
14	כ	כ	ADP	ADP	Definite=Def	15	case	_	_
15	מבואר	בואר	VERB	VERB	Gender=Masc|Number=Sing|Person=1,2,3|VerbForm=Part	1	obl	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl:relcl	color:blue
1	לימד	לימד	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Tense=Past	0	root	_	_
2	על	על	ADP	ADP	_	3	case	_	_
3	מי	מי	PRON	PRON	_	1	obl	_	_
4	ש	ש	SCONJ	SCONJ	_	5	mark	_	_
5	אין	אין	VERB	VERB	_	3	acl:relcl	_	_
6	ל	ל	ADP	ADP	_	7	case	_	_
7	ו	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3	5	obl	_	_
8	בנים	בן	NOUN	NOUN	Gender=Masc|Number=Plur	5	nsubj	_	_
9	ש	ש	SCONJ	SCONJ	_	12	mark	_	_
10	אינ	אין	ADV	ADV	_	12	advmod	_	_
11	ו	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3	12	nsubj:cop	_	_
12	בנוי	בנוי	ADJ	ADJ	Gender=Masc|Number=Sing	1	ccomp	_	_
13	אלא	אלא	CCONJ	CCONJ	_	14	cc	_	_
14	הרוס	הרוס	ADJ	ADJ	Gender=Masc|Number=Sing	12	conj	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 acl:relcl	color:blue
1	גט	גט	NOUN	NOUN	Gender=Masc|Number=Sing	16	dislocated	_	_
2	ש	ש	SCONJ	SCONJ	_	3	mark	_	_
3	נמצא	נמצא	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Tense=Past	1	acl:relcl	_	_
4	קרוע	קרוע	ADJ	ADJ	Gender=Masc|Number=Sing|VerbForm=Part	3	advcl	_	_
5	שתי	שתי	NOUN	NOUN	ExtPos=ADV|Gender=Fem|Number=Sing	4	advmod	_	_
6	ו	ו	CCONJ	CCONJ	_	5	fixed	_	_
7	ערב	ערב	NOUN	NOUN	Gender=Masc|Number=Sing	5	fixed	_	_
8	ש	ש	SCONJ	SCONJ	_	10	mark	_	_
9	הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3	10	nsubj:cop	_	_
10	קרע	קרע	NOUN	NOUN	Gender=Masc|Number=Sing	5	acl:relcl	_	_
11	של	של	ADP	ADP	_	12	case	_	_
12	בית	בית	NOUN	NOUN	Gender=Masc|Number=Sing	10	nmod	_	_
13	דין	דין	NOUN	NOUN	Gender=Masc|Number=Sing	12	compound:smixut	_	_
14	הרי	הרי	ADV	ADV	_	16	mark	_	_
15	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3	16	nsubj:cop	_	_
16	בטל	בטל	ADJ	ADJ	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
17	כ	כ	ADP	ADP	_	18	case	_	_
18	שאר	שאר	DET	DET	_	16	obl	_	NSent=Yes
19	שטרות	שטר	NOUN	NOUN	Gender=Masc|Number=Plur	18	compound:smixut	_	_

~~~



---
layout: base
title:  'Statistics of case in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `case`

This relation is universal.

683 nodes (8%) are attached to their parents as `case`.

672 instances of `case` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.53587115666179.

The following 12 pairs of parts of speech are connected with `case`: <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADP.html">ADP</a></tt> (485; 71% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-ADP.html">ADP</a></tt> (88; 13% instances), <tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_swell-pos-ADP.html">ADP</a></tt> (82; 12% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-ADP.html">ADP</a></tt> (11; 2% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-SCONJ.html">SCONJ</a></tt> (5; 1% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="sv_swell-pos-NUM.html">NUM</a></tt>-<tt><a href="sv_swell-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-DET.html">DET</a></tt>-<tt><a href="sv_swell-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_swell-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case	color:blue
1	Krama	krama	VERB	_	Mood=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
2	till	till	ADP	_	_	3	case	_	CorrectionLabels=S-R
3	träd	träd	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	1	obl	_	_
4	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case	color:blue
1	Och	och	CCONJ	_	_	3	cc	_	_
2	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	3	nsubj	_	_
3	håller	hålla	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	med	med	ADP	_	_	3	compound:prt	_	_
5	om	om	ADP	_	_	6	case	_	_
6	det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	3	obl	_	_
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case	color:blue
1	kollar	kolla	VERB	_	Mood=Ind|Tense=Pres|Typo=Yes|VerbForm=Fin|Voice=Act	0	root	_	CorrectionLabels=M-Verb;O-Cap
2	på	på	ADP	_	_	3	case	_	_
3	tinder	tinder	PROPN	_	Case=Nom|Typo=Yes	1	obl	_	CorrectionLabels=O-Cap
4	!	!	PUNCT	_	_	1	punct	_	_

~~~



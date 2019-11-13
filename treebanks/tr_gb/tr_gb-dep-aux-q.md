---
layout: base
title:  'Statistics of aux:q in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `aux:q`

This relation is a language-specific subtype of <tt><a href="tr_gb-dep-aux.html">aux</a></tt>.

192 nodes (1%) are attached to their parents as `aux:q`.

192 instances of `aux:q` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.0625.

The following 7 pairs of parts of speech are connected with `aux:q`: <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-AUX.html">AUX</a></tt> (108; 56% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-AUX.html">AUX</a></tt> (32; 17% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-AUX.html">AUX</a></tt> (27; 14% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-AUX.html">AUX</a></tt> (16; 8% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-AUX.html">AUX</a></tt> (5; 3% instances), <tt><a href="tr_gb-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_gb-pos-AUX.html">AUX</a></tt> (3; 2% instances), <tt><a href="tr_gb-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_gb-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 aux:q	color:blue
1	Dün	dün	NOUN	_	Case=Nom|Number=Sing	4	obl:tmod	_	_
2	çocuklar	çocuk	NOUN	_	Case=Nom|Number=Plur	4	nsubj	_	_
3	okula	okul	NOUN	_	Case=Dat|Number=Sing	4	obl	_	_
4	gitti	git	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	mi	mi	AUX	_	Number=Sing|Person=3|PronType=Int	4	aux:q	_	SpaceAfter=No
6	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux:q	color:blue
1	Hazır	hazır	ADJ	_	_	0	root	_	_
2	mısınız	mi	AUX	_	Number=Plur|Person=2|PronType=Int|Tense=Pres	1	aux:q	_	SpaceAfter=No
3	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux:q	color:blue
1	suçlulukla	suçluluk	NOUN	_	Case=Ins|Number=Sing	0	root	_	Stem=suçluluk
2	mı	mi	AUX	_	PronType=Int	1	aux:q	_	Stem=mı

~~~



---
layout: base
title:  'Statistics of nmod:poss in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="fi_pud-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="fi_pud-dep-nmod-gobj.html">nmod:gobj</a></tt>, <tt><a href="fi_pud-dep-nmod-gsubj.html">nmod:gsubj</a></tt>.

966 nodes (6%) are attached to their parents as `nmod:poss`.

966 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3944099378882.

The following 14 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (477; 49% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (295; 31% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-PRON.html">PRON</a></tt> (125; 13% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (24; 2% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (14; 1% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (13; 1% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="fi_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod:poss	color:blue
1	Laivassa	laiva	NOUN	_	Case=Ine|Number=Sing	0	root	0:root	_
2	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	1:cop	_
3	enemmän	enemmän	ADV	_	_	1	nsubj:cop	1:nsubj:cop	_
4	kuin	kuin	SCONJ	_	_	7	mark	7:mark	_
5	330	330	NUM	_	NumType=Card	6	nummod	6:nummod	_
6	miehistön	miehistö	NOUN	_	Case=Gen|Number=Sing	7	nmod:poss	7:nmod:poss	_
7	jäsentä	jäsen	NOUN	_	Case=Par|Number=Sing	3	advcl	3:advcl	SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod:poss	color:blue
1	Uutta	uusi	ADJ	_	Case=Par|Degree=Pos|Number=Sing	2	amod	2:amod	_
2	varainkäyttöä	varainkäyttö	NOUN	_	Case=Par|Number=Sing	3	obj	3:obj	_
3	kiihdyttää	kiihdyttää	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	0	root	0:root	_
4	Clintonin	Clinton	PROPN	_	Case=Gen|Number=Sing	6	nmod:poss	6:nmod:poss	_
5	muhkea	muhkea	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	6	amod	6:amod	_
6	pankkitili	pankki#tili	NOUN	_	Case=Nom|Number=Sing	3	nsubj	3:nsubj	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Hänen	hän	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Prs	2	nmod:poss	2:nmod:poss	_
2	unelmansa	unelma	NOUN	_	Case=Nom|Number=Sing|Person[psor]=3	4	nsubj:cop	4:nsubj:cop	_
3	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
4	lopettaa	lopettaa	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	0	root	0:root	_
5	uransa	ura	NOUN	_	Case=Gen|Number=Sing|Person[psor]=3	4	obj	4:obj	_
6	täällä	täällä	ADV	_	_	4	advmod	4:advmod	SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~



---
layout: base
title:  'Statistics of parataxis in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `parataxis`

This relation is universal.
There are 1 language-specific subtypes of `parataxis`: <tt><a href="no_nynorsklia-dep-parataxis-deletion.html">parataxis:deletion</a></tt>.

112 nodes (0%) are attached to their parents as `parataxis`.

103 instances of `parataxis` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.90178571428571.

The following 12 pairs of parts of speech are connected with `parataxis`: <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (73; 65% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (14; 13% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (11; 10% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="no_nynorsklia-pos-INTJ.html">INTJ</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-INTJ.html">INTJ</a></tt>-<tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 parataxis	color:blue
1	viss	viss	SCONJ	_	_	4	mark	_	_
2	at	at	SCONJ	_	_	4	mark	_	_
3	ein	ein	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|PronType=Art,Prs	4	nsubj	_	_
4	skadar	skade	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
5	seg	seg	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	4	obj	_	_
6	veit	vite	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	parataxis	_	_
7	du	du	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=2|PronType=Prs	6	nsubj	_	_
8	og	og	CCONJ	_	_	10	cc	_	_
9	ikkje	ikkje	PART	_	Polarity=Neg	10	advmod	_	_
10	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	conj	_	_
11	verneutstyr	verneutstyr	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	10	obj	_	_
12	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 parataxis	color:blue
1	ja	ja	INTJ	_	_	4	discourse	_	_
2	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	_	_
3	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	mogleg	mogleg	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
5	veit	vite	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	parataxis	_	_
6	du	du	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	_	_
7	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	expl	_	_
8	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	10	cop	_	_
9	så	så	ADV	_	_	10	advmod	_	_
10	lenge	lenge	ADV	_	Degree=Pos	4	conj	_	_
11	sidan	sidan	ADV	_	_	10	advmod	_	_
12	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	13	nsubj	_	_
13	var	vere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	11	advcl	_	_
14	på	på	ADP	_	_	13	compound:prt	_	_
15	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 parataxis	color:blue
1	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	4	cop	_	_
3	fire	fire	NUM	_	Number=Plur|NumType=Card	4	nummod	_	_
4	øre	øre	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	0	root	_	_
5	hugsar	hugse	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	parataxis	_	_
6	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
7	var	vere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	4	conj	_	_
8	.	$.	PUNCT	_	_	4	punct	_	_

~~~



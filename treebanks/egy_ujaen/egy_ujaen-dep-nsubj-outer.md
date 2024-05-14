---
layout: base
title:  'Statistics of nsubj:outer in UD_Egyptian-UJaen'
udver: '2'
---

## Treebank Statistics: UD_Egyptian-UJaen: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="egy_ujaen-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="egy_ujaen-dep-nsubj-pass.html">nsubj:pass</a></tt>.

8 nodes (0%) are attached to their parents as `nsubj:outer`.

8 instances of `nsubj:outer` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt>-<tt><a href="egy_ujaen-pos-PRON.html">PRON</a></tt> (4; 50% instances), <tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt>-<tt><a href="egy_ujaen-pos-PROPN.html">PROPN</a></tt> (2; 25% instances), <tt><a href="egy_ujaen-pos-PART.html">PART</a></tt>-<tt><a href="egy_ujaen-pos-PRON.html">PRON</a></tt> (1; 13% instances), <tt><a href="egy_ujaen-pos-PROPN.html">PROPN</a></tt>-<tt><a href="egy_ujaen-pos-DET.html">DET</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nsubj:outer	color:blue
1	ḥtp.t	ḥtp.t	NOUN	_	Gender=Fem|Number=Sing	2	nsubj	_	_
2	mꜣꜣ.t	mꜣꜣ	NOUN	Tense=Pres|VerbForm=RelForm|Voice=Act	Gender=Fem|Number=Sing	0	root	_	_
3	⸗k	k	PRON	SFP	Gender=Masc|Number=Sing|Person=2|PronType=Prs	2	nsubj:outer	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj:outer	color:blue
1	mꜣ.tn	mꜣꜣ	NOUN	Tense=Past|VerbForm=RelForm|Voice=Act	Gender=Neut|Number=Sing	0	root	_	_
2	Č̣ḥw.ti҆	Č̣ḥw.ti҆	PROPN	_	Gender=Masc	1	nsubj:outer	_	_
3	mw	mw	NOUN	Subj	Gender=Masc|Number=Plur	1	nsubj	_	_
4	i҆m.(i҆)w	m	ADJ	NisbaPrep	Case=Loc|Gender=Masc|Number=Plur	3	amod	_	_
5	⸗ś	ś	PRON	SFP	Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nmod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj:outer	color:blue
1	i҆(w)	i҆w	PART	Particle	_	3	discourse	_	_
2	⸗ś	⸗ś	PRON	SFP|Subj	Gender=Fem|Number=Sing|Person=3|PronType=Prs	1	nsubj:outer	_	_
3	nbꜣbꜣ	nbꜣbꜣ	VERB	SFC|Pres|Pred	Tense=Pres|VerbForm=Fin	0	root	_	_
4	⸗ś	⸗ś	PRON	SFP|Subj	Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_

~~~



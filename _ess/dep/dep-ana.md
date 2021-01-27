---
layout: relation
title:  'dep:ana'
shortdef : 'anaphoric dependency'
udver: '2'
---

`dep:ana` is used for anaphoric prefixes for the morpheme-level annotations.

~~~ conllu
# sent_id = Jacobson.Ch16.gold:23
# text = Taan'gani meq sikumalghii.
# gloss = The water has frozen down there.
# labels = complete-dep anno-hayley
1-2	Taan'gani	_	_	_	_	_	_	_	Analysis=[Anaphor]^un'gani(DEM.ADV.Loc)|Gloss=the-one-down-there-at-the-water
1	ta	ta	X	_	_	2	dep:ana	_	Analysis=[Anaphor]
2	an'gani	an'gani	ADV	_	Case=Loc	4	advmod	_	Analysis=un'gani(DEM.ADV.Loc)|Gloss=the-one-down-there-at-the-water
3	meq	meq	NOUN	_	Case=Abs|Number=Sing	4	nsubj	_	Analysis=megh(N)^[Abs.Sg]|Gloss=the-water
4-6	sikumalghii	_	_	_	_	_	_	_	Analysis=siku(V)^@~:(i/u)ma(V→V)^[Ptcp.Intr]^[3Sg]|Gloss=it-has-frozen|SpaceAfter=No
4	siku	siku	VERB	_	_	0	root	_	Analysis=siku(V)|Gloss=to-freeze-over
5	ma	ma	VERB	_	Tense=Past	4	aux	_	Analysis=@~:(i/u)ma(V→V)|Gloss=to-have-V-ed
6	lghii	lghii	X	_	Number[subj]=Sing|Person[subj]=3	5	dep:infl	_	Analysis=[Ptcp.Intr]^[3Sg]
7	.	.	PUNCT	_	_	4	punct	_	Analysis=.
~~~

---
layout: relation
title: 'xcomp:sp'
shortdef: 'open clausal complement for secondary predication'
udver: '2'
---

Ukrainian uses the `xcomp:sp` relation to distinguish the cases where `xcomp` is used for [secondary predication](http://universaldependencies.org/u/dep/xcomp.html#secondary-predicates).

~~~ conllu
# visual-style 6 2 nsubj:x color:blue
1 Ці                   _ _ _ _ 0 root _ _
2 землі                _ _ _ _ 0 root 6:nsubj:x _
3 вважали              _ _ _ _ 0 root _ _
4 останнім             _ _ _ _ 0 root _ _
5 нехристиянізованим   _ _ _ _ 0 root _ _
6 закутком             _ _ _ _ 3 xcomp:sp _ _
7 Європи               _ _ _ _ 0 root _ _
8 .                    _ _ _ _ 0 root _ _
~~~

~~~ sdparse
Ці землі вважали останнім нехристиянізованим закутком Європи . \n These lands were-considered the-last non-christianized part of-Europe.
xcomp:sp(вважали, закутком)
~~~

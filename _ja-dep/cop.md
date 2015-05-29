---
layout: relation
title: 'cop'
shortdef: 'copula'
---

The dependency type `cop` is reserved for a copular auxiliary だ / *da*.
The auxiliary typically follows a noun phrase to form a copular clause.
A postpositional phrase with a nominative case is commonly needed to complete sentence.

For example, 
dependencies for 太郎 は 学生 だ 。/ *Taro ha gakusei da* "Taro is a student." are as follows.

~~~ sdparse
太郎 は 学生 だ 。 \n Taro TOPIC student COPULA .
nsubj(学生, 太郎)
case(太郎, は)
cop(学生, だ)
punct(学生, 。)
~~~

Note that we treat the auxiliary だ / *da* after adjectives as [aux]().
Therefore dependencies for さくら が きれい だ 。 / *sakura ga kirei da* "The cherry blossoms are beautiful." do not include the `cop' relation.

~~~ sdparse
さくら が きれい だ 。 \n cherry_blossoms NOM beautiful AUX .
nsubj(きれい, さくら)
case(さくら, が)
aux(きれい, だ)
punct(きれい, 。)
~~~



# Mangalyaan
Mangalyaan web application is a visualizing tool that helps the Mars rover (Mangalyaan) to find the shortest path between a start point and an end point using artificial intelligence search algorithms.
It is an entity which acts, directing its activity towards achieving goals that is to find optimized path to the destination while avoiding all the obstacles This cost might include cost of wear and tear of the rover and cost of energy wasted. Different algorithms are observed and applied to help the mangalyaan to become intelligent and make smart decisions.

# Algorithms
## Uninformed Search
The uninformed search does not contain any domain knowledge such as closeness, the location of the goal. It operates in a brute-force way as it only includes information about how to traverse the tree and how to identify leaf and goal nodes.

### 1.Breath First Search Algorithm
Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the start Node in the grid, and explores all of the neighbour nodes at the present depth prior to moving on to the nodes at the next depth level. It can be implemented using FIFO queue data structure. It is an unweighted algorithm.

### 2.Dijkstra's Algorithm
Dijkstra's algorithmis a weighted algorithm that finds the shortest path between two given nodes, but a more common variant fixes a single node as the "source" node and finds shortest paths from the source to all other nodes in the graph, producing a shortest-path tree. Although in our case we are making a small change by passing the information about the target node so that the algorithm can work efficiently.

## Informed Searches
Informed search algorithms use domain knowledge. In an informed search, problem information is available which can guide the search. Informed search strategies can find a solution more efficiently than an uninformed search strategy. Informed search is also called a Heuristic search.

A heuristic is a way which might not always be guaranteed for best solutions but guaranteed to find a good solution in reasonable time.

### 1.Greedy Best-First Search Algorithm
Greedy best-first search algorithm a weighted algorithm that always selects the path which appears best at that moment. It is the combination of depth-first search and breadth-first search algorithms. It uses the heuristic function and search. Best-first search allows us to take the advantages of both algorithms. With the help of best-first search, at each step, we can choose the most promising node. In the best first search algorithm, we expand the node which is closest to the goal node and the closest cost is estimated by heuristic function, i.e. f(n)= h(n).
Were, h(n)= estimated cost from node n to the goal.

### 2. A* Algorithm
A* search is the most commonly known form of best-first search.It is a weigted algorithm that uses heuristic function h(n), and cost to reach the node n from the start state g(n). It has combined features of UCS and greedy best-first search, by which it solve the problem efficiently. A* search algorithm finds the shortest path through the search space using the heuristic function. This search algorithm expands less search tree and provides optimal result faster. A* algorithm uses g(n)+h(n).

# Additional features
1.User can add weights in case of weighed algorithm , algorithm considers these weights and finds  shortest path that cost the minimum.  
2.Alert on the screen if path doesn't exist.


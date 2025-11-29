## The Container Revolution

Containers have fundamentally changed how we build, ship, and run software. They package code and dependencies together, ensuring consistency across environments. **Docker** made containers accessible to everyone.

## The Need for Orchestration

Running a few containers is easy. Running thousands of containers across hundreds of servers is hard. You need to handle:
-   **Scheduling:** Where should this container run?
-   **Scaling:** Traffic is up, start more copies.
-   **Healing:** A container crashed, restart it.
-   **Updates:** Roll out version 2.0 without downtime.

This is where **Kubernetes (K8s)** comes in. It is the operating system for the cloud.

## Key Kubernetes Concepts

### 1. Pods
The smallest deployable unit. A Pod represents a single instance of a running process in your cluster.

### 2. Deployments
Manage the lifecycle of Pods. You describe a *desired state* (e.g., "I want 3 replicas of nginx"), and the Deployment Controller changes the actual state to the desired state.

### 3. Services
An abstract way to expose an application running on a set of Pods as a network service. It provides a stable IP address and load balancing.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: MyApp
  ports:
    - protocol: TCP
      port: 80
      targetPort: 9376
```

## Deployment Strategies

-   **Rolling Update:** Incrementally replace old Pods with new ones. Zero downtime.
-   **Blue/Green:** Spin up a parallel environment (Green) with the new version. Switch traffic instantly. Easy rollback.
-   **Canary:** Roll out the update to a small subset of users first.

## Conclusion

Docker provides the standard unit of software, and Kubernetes provides the platform to run it at scale. Together, they form the foundation of modern cloud-native infrastructure.
